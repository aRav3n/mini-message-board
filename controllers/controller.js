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

async function messageDetailGet(req, res) {
  const id = req.params.messageId * 1;

  if (isNaN(id)) {
    res.status(404).render("errorPage", { links: links });
    return;
  }

  const message = await db.getMessageDetails(id);

  if (message) {
    res.render("currentMessage", { links: links, message: message });
  } else {
    res.status(404).render("errorPage", { links: links });
  }
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
  messageDetailGet,
  newGet,
  newPost,
};
