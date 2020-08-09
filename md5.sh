#!/bin/sh

rm -rf *.md5 >/dev/null 2>&1

make(){
	[ -f "daily.txt" ] && md5sum daily.txt > daily.txt.md5
	[ -f "koolproxy.txt" ] && md5sum koolproxy.txt > koolproxy.txt.md5
	[ -f "kp.dat" ] && md5sum kp.dat > kp.dat.md5
}

make >/dev/null 2>&1

sed -ri 's/(  .*\.txt|  .*kp\.dat)//' *.md5 