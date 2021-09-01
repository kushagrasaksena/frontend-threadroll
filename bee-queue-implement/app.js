import enQueue from './createJob.js'

var myArgs = process.argv.slice(2);
console.log(myArgs);

myArgs.forEach(element => {
    const job = enQueue(element)
});