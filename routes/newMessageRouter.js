const { Router } = require("express");
const newMessageRouter = Router();

function returnValue(links) {
  return newMessageRouter.get("/", (req, res) =>
    res.render("newMessage", { links: links })
  );
}

module.exports = returnValue;
