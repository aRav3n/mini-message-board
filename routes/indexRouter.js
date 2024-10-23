const { Router } = require("express");
const indexRouter = Router();

function returnValue(links) {
  return indexRouter.get("/", (req, res) =>
    res.render("index", { links: links })
  );
}

module.exports = returnValue;
