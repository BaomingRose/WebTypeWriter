const express = require('express');   //引入express模块
const bodyParser = require('body-parser')

//创建express的实例
var app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('Hello,myServer'); //服务器响应请求
});

app.listen(8889, function() {   //监听8889端口
    console.log("Server running at 8889 port");
});
