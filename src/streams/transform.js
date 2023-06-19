import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const readable = process.stdin;
  const writeble = process.stdout;

  const transformer = new Transform({
    transform(chunk, end, cb) {
      const a = chunk.toString().trim("");

      const reverseChank = a.split("").reverse().join("");

      this.push(reverseChank + "\n");

      cb();
    },
  });

  pipeline(readable, transformer, writeble, (err) => {
    console.log(err);
  });
};

await transform();
