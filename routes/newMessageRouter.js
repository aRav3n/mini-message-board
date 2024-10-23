const { Router } = require("express");
const newMessageRouter = Router();

function returnValue(links) {
  newMessageRouter.get("/", (req, res) =>
    res.render("newMessage", { links: links })
  );

  return newMessageRouter;
}

module.exports = returnValue;
