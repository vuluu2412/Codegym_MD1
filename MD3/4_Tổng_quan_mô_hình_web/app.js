const http = require('http');
http.createServer(function (req, res){
    let txt = " "
    if (req.url==="/login"){
        txt = "login success";
    } else {
        txt = "login fail"
    }
    res.end(txt);
}).listen(8080,"localhost");