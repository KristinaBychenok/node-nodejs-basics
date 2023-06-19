import fs from "fs";

async function read() {
  fs.readFile("src/fs/files/fileToRead.txt", "utf8", (err, data) => {
    if (err) throw Error("FS operation failed");
    console.log(data);
  });
}

await read();
