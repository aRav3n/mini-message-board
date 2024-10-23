const { Router } = require("express");
const messages = require("../models/messages");
const newMessageRouter = Router();
const getNewDate = require("../getNewDate");

function returnValue(links, messages) {
  newMessageRouter.get("/", (req, res) =>
    res.render("newMessage", { links: links })
  );

  newMessageRouter.post("/", (req, res) => {
    const newMessageObject = {
      user: req.body.user,
      text: req.body.text,
      added: getNewDate(),
    };
    messages.push(newMessageObject);
    res.redirect("/");
  });

  return newMessageRouter;
}

module.exports = returnValue;
