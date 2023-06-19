const parseEnv = () => {
  const result = Object.keys(process.env)
    .filter((key) => key.includes("RSS_"))
    .reduce((acc, key) => acc + `${key}=${process.env[key]}; `, "");

  console.log(result);
};

parseEnv();
