var HTMLDivElement = function HTMLDivElement() {
    // 构造函数
    throw new TypeError("Illegal constructor")
};
catvm.safefunction(HTMLDivElement)



Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
})




//真实的div
catvm.memory.htmlelements["div"] = function() {
    var div = new(function() {})
        ///////////////////////////////////////////////////
    div.align = "";

    ///////////////////////////////////////////////////
    div.__proto__ = HTMLDivElement.prototype
    return div;
}