
var History = function History() {  //构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(History);


Object.defineProperties(History, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
})

/////////////////////////////

History.prototype.back=function  back() {debugger;};catvm.safefunction(History.prototype.back)

/////////////////////////////
history = {};
history.__proto__ = History.prototype;

history = catvm.proxy(history);