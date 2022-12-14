const loadConfig = async () => {
  let result = {};

  await fetch("/env").then(async (res) => {
    await res.text().then((config) => {
      const configArray = config.split("\n");

      configArray.forEach((item) => {
        result = {
          ...result,
          [item.split("=")[0]]:
            item.split("=")[1] !== "true" && item.split("=")[1] !== "false"
              ? item.split("=")[1]
              : item.split("=")[1] === "true",
        };
      });
    });
  });

  return result;
};

export default loadConfig;
