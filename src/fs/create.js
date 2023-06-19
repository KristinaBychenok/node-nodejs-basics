import fs from "fs";

const create = async () => {
  fs.writeFile(
    "src/fs/files/fresh.txt",
    "I am fresh and young",
    { flag: "ax" },
    (err) => {
      if (err) throw Error("FS operation failed");
    }
  );
};

await create();
