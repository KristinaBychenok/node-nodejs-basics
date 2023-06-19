import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const workerPromiseArray = [];
const num = 10;

const performCalculations = async () => {
  for (let i = 0; i < cpus().length; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/worker.js", {
        workerData: num + i,
      });
      worker.on("message", (value) =>
        resolve({ status: "resolved", data: value })
      );
      worker.on("error", () => reject({ status: "error", data: null }));
    });

    workerPromiseArray.push(workerPromise);
  }

  Promise.allSettled(workerPromiseArray).then((result) => {
    console.log(result.map((res) => res.value));
  });
};

await performCalculations();
