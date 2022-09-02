import fs from "fs/promises";

//Membaca File
const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());

//Membuat File
await fs .writeFile("Temp.txt" ,"Hello NodeJS");