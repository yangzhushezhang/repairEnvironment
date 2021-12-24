var fs = require('fs');



function GetCode() {
    var code = "";
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`) + "\r\n";

    return code;
}


module.exports = {
    GetCode
}