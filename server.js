const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve("public");
const NM_PATH = path.resolve("node_modules"); // NM => Node Modules

app.use(express.static(PUBLIC_PATH));
app.use("/bs", express.static(path.join(NM_PATH, "bootstrap")));
app.get("/", (req, res) => res.sendFile(path.join(PUBLIC_PATH, "index.html")));

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT} | http://localhost:${PORT}`)
);
