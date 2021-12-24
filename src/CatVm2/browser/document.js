var Document = function Document() { //构造函数

};
catvm.safefunction(Document);


Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
})
document = {};
document.__proto__ = Document.prototype;
document.referrer = location.href || "";
//////////////////////////////////////////////////////////

document.cookie = "";
document.getElementById = function getElementById(id) {
    debugger;
    //用id 匹配当前环境内存已有的元素
    return null;

};
catvm.safefunction(document.getElementById)


document.addEventListener = function addEventListener() {

};
catvm.safefunction(document.addEventListener)



document.createElement = function createElement(tagName) {
    var tagname = tagName.toLowerCase() + "";
    if (catvm.memory.htmlelements[tagName] != undefined) {
        debugger;
    }
    return catvm.proxy(catvm.memory.htmlelements[tagName]())

};
catvm.safefunction(document.createElement)


//////////////////////////////////////////////////////////

document = catvm.proxy(document);