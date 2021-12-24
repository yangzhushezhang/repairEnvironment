var fs = require('fs');
var catvm2 = require('./CatVm2/catvm2.node.js');


const { VM, VMScript } = require('vm2');

var catvm2code = catvm2.GetCode();




const codefile = `${__dirname}/code.js`;
const vm = new VM();
const script = new VMScript(catvm2code + fs.readFileSync(codefile), `${__dirname}/我正在调试代码.js`)
debugger
vm.run(script);
debugger