const path = require("path");

const mime = require("mime-types");

class Webfile {

    reqDetails = {}; 
    reqUrl = {};
    reqResource = ""; 

    static errorPage = path.join(__dirname, "../views/404.html");

    constructor(reqUrl) {
        this.reqUrl = reqUrl; 

        this.reqDetails = path.parse(reqUrl);

        const reqResourceUrl = path.join(__dirname, "../views", reqUrl);

        if(this.reqDetails.ext) {
            this.reqResource = reqResourceUrl;
        } else if (this.reqDetails.base) {
            this.reqResource = reqResourceUrl + ".html";
        } else {
            this.reqResource = reqResourceUrl + "index.html";
        }
    }


    getMimeType() {
        const reqExt = this.reqDetails.ext || ".html";
        const mimeType = mime.lookup(reqExt) || "text/plain";
        console.log(`MIME type for ${reqExt}: ${mimeType}`);
        return mime.lookup(reqExt) || "text/plain";
        

    }


}


module.exports = Webfile;