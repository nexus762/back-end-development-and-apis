const http = require("http")
const fs = require("fs")

const data = fs.readFileSync("assets/poem.txt");
console.log(data);

const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);