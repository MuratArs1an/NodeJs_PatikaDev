const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>INDEX SAYFASINA HOSGELDINIZ</h2>')
    }else if(url==='/about'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>About Sayfasina Hosgeldiniz</h2>')
    }else if(url==='/contact'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>İletişim Sayfasina Hosgeldiniz</h2>')
    }else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.write("<h2>Sayfa Bulunamadi</h2>")
    }

    res.end();
});

const port=5000;

server.listen(port,()=>{
    console.log(`Sunucu ${port} portuna bağlandı`);
});