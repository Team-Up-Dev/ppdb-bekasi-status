const path = require("path");

const config = require(path.resolve("config.json"));
const JSON_PATH = path.resolve(config.JSON_PATH);
const FULL_PATH = path.join(JSON_PATH, config.OUTPUT_FILE);

module.exports = () => require(FULL_PATH).data;
