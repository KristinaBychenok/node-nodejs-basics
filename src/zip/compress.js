import fs from "fs";
import zlib from "node:zlib";

const compress = async () => {
  const read = fs.createReadStream("src/zip/files/fileToCompress.txt");
  const write = fs.createWriteStream("src/zip/files/archive.gz");

  const gzip = zlib.createGzip();

  read.pipe(gzip).pipe(write);
};

await compress();
