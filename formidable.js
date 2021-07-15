var formidable = require('formidable');
var http = require('http');
var fs = require('fs');

http.createServer(function(req , res){
    if(req.url == '/telechargement'){
        var form = new formidable.IncomingForm();
        form.parse(req , function(err,fields,files){
            var oldpath = files.filetoupload.path;
            var newpath = '/Desktop/'+ files.filetoupload.name;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err ;
                res.write('Fichier téléchargé et sauvearder');
                res.end();
            });
        });
    }else {

        
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<form action="telechargement" method = "post" entype="multipart/form-data">');
    res.write('<input type="file" name="file"><br>');
    res.write('<input type ="submit" value="soumettre">');
    res.write('</form>')

    return res.end();
    }


}).listen(8080);