var EvenTarget = function EvenTarget() { //构造函数

};
catvm.safefunction(EvenTarget);

Object.defineProperties(EvenTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EvenTarget",
        configurable: true
    }
});


EvenTarget.prototype.addEventListener = function addEventListener(type, callback) {

    if (!(type in catvm.memory.listeners)) {
        catvm.memory.listeners[type] = [];
    }
    catvm.memory.listeners[type].push(callback);
};
catvm.safefunction(EvenTarget.prototype.addEventListener);


EvenTarget.prototype.dispatchEvent = function dispatchEvent() {


};
catvm.safefunction(EvenTarget.prototype.dispatchEvent);




EvenTarget.prototype.removeEventListener = function removeEventListener(type, listener, options, useCapture) {

    debugger;
};
catvm.safefunction(EvenTarget.prototype.removeEventListener);


EvenTarget = catvm.proxy(EvenTarget)