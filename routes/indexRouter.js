const { Router } = require("express");
const indexRouter = Router();

function returnValue(links, messages) {
  indexRouter.get("/", (req, res) =>
    res.render("index", { links: links, messages: messages })
  );

  return indexRouter;
}

module.exports = returnValue;
