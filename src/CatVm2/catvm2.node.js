var fs = require('fs')

//框架工具模块

var vmtools = require('./tools/tools.node.js')
var htmlelement = require('./browser/HTMLElements/htmlelements.node.js')

function GetCode() {
    var code = "";
    //引入框架工具代码
    code += vmtools.GetCode() + "\r\n";

    //引入用户框架设置  /暂时怎么写


    code += "catvm.memory.config.proxy=true;\r\n";
    //引入浏览器相关
    code += fs.readFileSync(`${__dirname}/browser/eventTarget.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/windowProperties.js`) + "\r\n";


    code += fs.readFileSync(`${__dirname}/browser/window.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/navigator.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/location.js`) + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/history.js`) + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + "\r\n";



    code += htmlelement.GetCode() + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/document.js`) + "\r\n";


    //引入用户自定义环境
    code += "debugger;\r\n";
    return code;

}


module.exports = {
    GetCode
}