const { Router } = require("express");
const indexRouter = Router();

function returnValue(links, messages) {
  router.get("/", (req, res) =>
    res.render("index", { links: links, messages: messages })
  );

  return router;
}

module.exports = returnValue;