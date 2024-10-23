const express = require("express");
const app = express();
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
];

const indexRouter = require("./routes/indexRouter")(links);
const newMessageRouter = require("./routes/newMessageRouter")(links);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT);
