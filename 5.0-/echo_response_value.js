// 打印输出Response相关变量
console.log("Status Code: " + $response.statusCode);
console.log("Headers: " + JSON.stringify($response.headers));
console.log("Body: " + $response.body);