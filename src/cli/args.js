const parseArgs = () =>
  process.argv.map((arg, ind) => {
    if (arg.startsWith("--")) {
      console.log(`${arg.slice(2)} is ${process.argv[ind + 1]}`);
    }
  });

parseArgs();
