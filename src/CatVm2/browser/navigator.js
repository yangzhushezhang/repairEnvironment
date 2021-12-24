catvm.memory.navigator={}
var Navigator = function Navigator() {  //构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Navigator);


Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
})

/////////////////////////////
Navigator.prototype.plugins=[];
Navigator.prototype.language=["zh-CN","zh"];
Navigator.prototype.userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:95.0) Gecko/20100101 Firefox/95.0"



navigator = {};
navigator.__proto__ = Navigator.prototype;



for (let prototype_  in Navigator.prototype) {
    navigator[prototype_]=Navigator.prototype[prototype_] ;
   
    Navigator.prototype.__defineGetter__(prototype_,function () {debugger ;
        throw new TypeError("Illegal constructor");

    }) ;
  
    
}

/////////////////////////////


navigator = catvm.proxy(navigator);