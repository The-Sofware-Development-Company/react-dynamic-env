const loadConfig = async () => {
  var result = {};

  await fetch("/assets/env").then(async (res) => {
    await res.text().then((config) => {
      const configArray = config.split(" ")[0].replace("\r\n", ",").split(",");

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
