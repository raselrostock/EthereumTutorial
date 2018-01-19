var EthUtil= require("ethereumjs-util");
const args = process.argv[2];
var hexToBytes = function(hex)
{
	var bytes=[];
	for(  c =0; c< hex.length; c+=2)
		bytes.push(parseInt(hex.substr(c,2),16));
	return bytes;
}
var privateKeyToAddress = function(privateKey){
	return "0x"+EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex');
}
var m=privateKeyToAddress(args);
console.log(m);
console.log("rasel");