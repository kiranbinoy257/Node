const url=require("url")
let path="http://www.google.com/about.html?name=alan"
let result=url.parse(path);
console.log(result.query.split("=")[1]);