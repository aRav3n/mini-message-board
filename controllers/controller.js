const db = require("../db/queries");
const links = require("../models/links");

async function getMessageArray() {
  const messages = await db.getMessages();
  return messages;
}

function errorGet(req, res) {
  res.render("errorPage", {
    links: links,
  });
}

async function indexGet(req, res) {
  const messages = await getMessageArray();
  res.render("index", {
    links: links,
    messages: messages,
  });
}

async function newGet(req, res) {
  res.render("newMessage", {
    links: links,
  });
}

async function newPost(req, res) {
  const { user, text } = req.body;
  await db.submitNewMessage(user, text);
  res.redirect("/");
}

module.exports = {
  errorGet,
  indexGet,
  newGet,
  newPost,
};
