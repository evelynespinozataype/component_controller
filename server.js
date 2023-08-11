const http = require("http");

http.createServer((request,response) => {
    response.writeHead(200, {"Content-Type": "application/json"});

    if(request.url === '/produto') {
        response.end(JSON.stringify({
            message: "rota produto"
        }))
    }
    if(request.url === '/usuarios'){
        response.end(JSON.stringify({
            message: "rota usuarios"
        }));
    }

    response.end(JSON.stringify({
        message: "minha primeira application",
    }));
}).listen(4001,() => console.log("servidor esta rosdando na porta 4001"));