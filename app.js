const express = require("express");
const app = express();
const links = require("./models/links");
const messages = require("./models/messages");
const path = require("node:path");

const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/indexRouter")(links, messages);
const newMessageRouter = require("./routes/newMessageRouter")(links, messages);
const messageDetailsRouter = require("./routes/messageRouter")(links, messages);

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message", messageDetailsRouter);

app.get("*", (req, res) =>
  res.status(404).render("errorPage", { links: links })
);

app.listen(PORT);
