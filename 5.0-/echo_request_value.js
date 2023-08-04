// 打印输出Request相关变量
console.log("Scheme: " + $request.scheme);
console.log("Method: " + $request.method);
console.log("URL: " + $request.url);
console.log("Path: " + $request.path);
console.log("Headers: " + JSON.stringify($request.headers));