const http = require("http");

const fs = require("fs");

const path = require("path");

const Webfile = require("./functions/webfile.js");




app = (req, response) => {

    const reqWebfile = new Webfile(req.url)

    if(fs.existsSync(reqWebfile.reqResource)) {
        response.writeHead(200, {"Content-Type": reqWebfile.getMimeType()});
        response.write(fs.readFileSync(reqWebfile.reqResource));
    } else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write(fs.readFileSync(Webfile.errorPage));
    }

    response.end()
}



const server = http.createServer(app);

const port = process.env.PORT || "3445";

server.listen(port);

