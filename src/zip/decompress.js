import fs from "fs";
import zlib from "node:zlib";

const decompress = async () => {
  const read = fs.createReadStream("src/zip/files/archive.gz");
  const write = fs.createWriteStream("src/zip/files/fileToCompress.txt");

  const unzip = zlib.createUnzip();

  read.pipe(unzip).pipe(write);
};

await decompress();
