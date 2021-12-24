//框架代理功能
catvm.proxy = function(o) {
    if (catvm.memory.config.proxy == false) { return o };
    return new Proxy(o, {
        set(target, property, value) {
            // console.log("set", obj, prop, value);


            console.table([{ "类型": "set-->", "调用者": target, "属性": property, "值": value }])

            return Reflect.set(...arguments);
        },
        get: function(target, property, receiver) {
            // console.log("get", target, property, target[property])

            console.table([{ "类型": "set-->", "调用者": target, "属性": property, "值": target[property] }])

            return target[property];
        }
    })
}