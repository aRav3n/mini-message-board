const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 3000;
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.listen(PORT);