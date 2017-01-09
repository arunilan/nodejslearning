/* 
The os module provides a number of operating system-related utility methods

*/


const os = require('os');
console.log('os.EOL', os.EOL);
console.log('os.arch ' + os.arch());
console.log('os.constants ' + os.constants);
console.log('os.cpus' + os.cpus);

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());

var v8 = require('v8');

console.log(v8.getHeapSpaceStatistics());


