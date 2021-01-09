const axios = require("axios");
const path = require("path");
const fs = require("fs");

const config = require(path.resolve("config.json"));
const JSON_PATH = path.resolve(config.JSON_PATH);
const FULL_PATH = path.join(JSON_PATH, config.OUTPUT_FILE);

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 8080;

const FULL_PROXY_URL = "http://" + HOST + ":" + PORT;
const URL =
  "https://bekasi.siap-ppdb.com/seleksi/reguler/smp/1-22020013-0.json";

const fetchData = async () =>
  await axios.default
    .get(FULL_PROXY_URL + "/" + URL, {
      headers: { Origin: "0.0.0.0" },
    })
    .then((response) => response.data)
    .then((result) => writeData(result))
    .catch((err) => {
      console.log(err);
      process.exit();
    });

const writeData = (json) =>
  fs.writeFileSync(FULL_PATH, JSON.stringify(json, null, 2));

if (!fs.existsSync(JSON_PATH)) {
  fs.mkdirSync(JSON_PATH);
  fetchData().then(() => console.log("File dibuat"));
}

(function () {
  setInterval(async () => await fetchData(), config.REFRESH_DATA * 1000);
})();
