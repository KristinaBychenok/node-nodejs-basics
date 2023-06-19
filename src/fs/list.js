import fs from "fs";

const list = async () => {
  fs.readdir("src/fs/files", (err, files) => {
    if (err) throw Error("FS operation failed");
    console.log(files);
  });
};

await list();
