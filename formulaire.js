var http = require('http');

http.createServer(function(req , res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<form action="telechargement" method = "post" entype="multipart/form-data">');
    res.write('<input type="file" name="file"><br>');
    res.write('<input type ="submit" value="soumettre">');
    res.write('</form>')

    return res.end();
}).listen(8080);