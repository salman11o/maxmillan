const fs = require('fs');
const reqhandler = (req, res) => {
    if (req.url === '/') {

        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button>Send</button></form></body>');
        res.write("</html>");
        // console.log("server up and running");
        return res.end();
    }
    if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on('data', (bloc) => {
            console.log(bloc);
            body.push(bloc);
        })
        req.on('end', () => {
            const buff = Buffer.concat(body).toString();
            const mess = buff.split('=')[1];

            console.log(buff);
            console.log(mess);
            if (typeof (buff).toString() === "undefined") {
                console.log("Data is undefined");
            }
            else {
                console.log(buff);
                fs.writeFileSync('./message.txt', mess);
            }

        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write('<body><h1>Welcome to my Server</h1></body>');
    res.write("</html>");
    // console.log("server up and running");
    return res.end();
}
exports.handler = reqhandler;