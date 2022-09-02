const os = require("os");

console.info(os.platform());
console.table(os.cpus());
console.info(os.release());
console.table(os.networkInterfaces());
console.info(os.type());