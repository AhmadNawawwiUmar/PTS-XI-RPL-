import process from "process";

process.addListener("exit",(exitcode) => {
    console.info(`Nodejs exit with code ${exitcode}`);
})


console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.info("hello");