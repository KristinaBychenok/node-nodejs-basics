const { createHash } = await import("node:crypto");
import fs from "fs";

const calculateHash = async () => {
  const hash = createHash("SHA256");

  const read = fs.createReadStream(
    "src/hash/files/fileToCalculateHashFor.txt"
  );
  console.log(read.pipe(hash).digest("hex"));
};

await calculateHash();
