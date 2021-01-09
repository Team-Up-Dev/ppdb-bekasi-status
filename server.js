const socketIO = require("socket.io");
const chokidar = require("chokidar");
const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

const config = require(path.resolve("config.json"));

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve("public");
const NM_PATH = path.resolve("node_modules"); // NM => Node Modules
const JSON_PATH = path.resolve(config.JSON_PATH);
const FULL_PATH = path.join(JSON_PATH, config.OUTPUT_FILE);

app.use(express.static(PUBLIC_PATH));
app.use("/bs", express.static(path.join(NM_PATH, "bootstrap")));
app.get("/", (req, res) => res.sendFile(path.join(PUBLIC_PATH, "index.html")));

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Listening on port ${PORT} | http://localhost:${PORT}`)
);

const Sock = socketIO(server);
const watcher = chokidar.watch(FULL_PATH, { persistent: true });

Sock.on("connection", (socc) => {});
