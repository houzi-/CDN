#!/bin/sh
#
# Dnspod DDNS for UniFi OS / Busybox
# Author: Jason Lin
# Version: 2025-10-12 + Log Rotation
# ----------------------------------------

# === 配置部分 ===
API_ID="597526"
API_TOKEN="327865257c0f951d4908ab506793611d"
DOMAIN="jason-lin.top"
SUB_DOMAIN="www"
CHECK_URL="https://4.ipw.cn"   # 可换成 https://api.ipify.org
LOG_FILE="/root/ddns/ddns.log"  # 日志文件路径

# === 初始化 ===
PATH="/usr/bin:/usr/sbin:/bin:/sbin:/usr/local/bin"
HOST="${SUB_DOMAIN}.${DOMAIN}"
[ "$SUB_DOMAIN" = "@" ] && HOST="$DOMAIN"

# === 日志大小检测与清理 ===
if [ -f "$LOG_FILE" ]; then
  LOG_SIZE=$(wc -c < "$LOG_FILE" 2>/dev/null)
  if [ "$LOG_SIZE" -ge 10240 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🧹 Log exceeded 10KB, clearing..." >> "$LOG_FILE"
    echo "" > "$LOG_FILE"
  fi
else
  touch "$LOG_FILE"
fi

# 将所有输出追加到日志
exec >> "$LOG_FILE" 2>&1

echo "---------------------------------------------"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Checking DDNS for $HOST"

# === 获取当前公网IP ===
CURRENT_IP=$(curl -4 -ks "$CHECK_URL")
if ! echo "$CURRENT_IP" | grep -Eqo '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "❌ Failed to get current IP from $CHECK_URL"
  exit 1
fi
echo "[Current IP]: $CURRENT_IP"

# === 获取线上解析的 IP ===
DNS_IP=$(nslookup "$HOST" 2>/dev/null | grep 'Address' | tail -n1 | awk '{print $2}')
if echo "$DNS_IP" | grep -Eqo '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "[DNS IP]: $DNS_IP"
else
  DNS_IP=""
fi

# === 若 DNS IP 一致则跳过 ===
if [ "$DNS_IP" = "$CURRENT_IP" ]; then
  echo "✅ DNS already up-to-date. Skip API call."
  exit 0
fi

# === 获取Dnspod记录 ===
LOGIN_TOKEN="${API_ID},${API_TOKEN}"
TOKEN="login_token=${LOGIN_TOKEN}&format=json&domain=${DOMAIN}&sub_domain=${SUB_DOMAIN}"

RECORD=$(curl -4 -ks -X POST https://dnsapi.cn/Record.List -d "$TOKEN")
RECORD_ID=$(echo "$RECORD" | grep -Eo '"id"[[:space:]]*:[[:space:]]*[0-9]+' | head -1 | grep -Eo '[0-9]+')
RECORD_IP=$(echo "$RECORD" | grep -Eo '"value"[[:space:]]*:[[:space:]]*"([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)"' | head -1 | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+')

# === 若记录不存在则创建 ===
if [ -z "$RECORD_ID" ]; then
  echo "No record found, creating new record..."
  ADD_DATA="${TOKEN}&record_type=A&record_line=默认&value=${CURRENT_IP}"
  ADD_RESULT=$(curl -4 -ks -X POST https://dnsapi.cn/Record.Create -d "$ADD_DATA")
  if echo "$ADD_RESULT" | grep -q "successful"; then
    echo "✅ Record created successfully."
  elif echo "$ADD_RESULT" | grep -q "记录已经存在"; then
    echo "⚠️ Record already exists. Skip creation."
  else
    echo "❌ Failed to create record."
    echo "$ADD_RESULT"
    exit 1
  fi
  exit 0
fi

echo "[Dnspod IP]: $RECORD_IP"

# === 若 API IP 已一致也跳过 ===
if [ "$CURRENT_IP" = "$RECORD_IP" ]; then
  echo "✅ API record already up-to-date. Skip update."
  exit 0
fi

# === 执行更新 ===
UPDATE_DATA="${TOKEN}&record_id=${RECORD_ID}&record_type=A&record_line=默认&value=${CURRENT_IP}"
UPDATE_RESULT=$(curl -4 -ks -X POST https://dnsapi.cn/Record.Ddns -d "$UPDATE_DATA")

if echo "$UPDATE_RESULT" | grep -q "successful"; then
  echo "✅ DDNS updated successfully: $RECORD_IP → $CURRENT_IP"
else
  echo "❌ DDNS update failed."
  echo "$UPDATE_RESULT"
  exit 1
fi
