
//框架代理功能
catvm.proxy = function (o) {
    if (catvm.memory.config.proxy == false) { return o };
    return new Proxy(o, {
        set(obj, prop, value) {
            console.log("set", obj, prop, value);
            return Reflect.set(...arguments);
        },
        get: function (target, property, receiver) {
            console.log("get", target, property, target[property])
            return target[property];
        }
    })
}