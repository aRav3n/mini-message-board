const { Router } = require("express");
const indexRouter = Router();

function returnValue(links, messages) {
  return indexRouter.get("/", (req, res) =>
    res.render("index", { links: links , messages: messages })
  );
}

module.exports = returnValue;
