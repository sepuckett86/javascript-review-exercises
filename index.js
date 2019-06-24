const createDog = require('./create-dog');

console.log(process.argv);
console.log(createDog(process.argv[2], parseInt(process.argv[3]), process.argv[4]));

