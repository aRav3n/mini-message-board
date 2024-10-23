const getNewDate = require("../getNewDate");

const messages = [
  {
    text: "May the Force be with you.",
    user: "Luke Skywalker",
    added: getNewDate(),
  },
  {
    text: "Never tell me the odds.",
    user: "Han Solo",
    added: getNewDate(),
  },
  {
    text: "Help me, Obi-Wan Kenobi. You're my only hope.",
    user: "Princess Leia",
    added: getNewDate(),
  },
  {
    text: "I am your father.",
    user: "Darth Vader",
    added: getNewDate(),
  },
  {
    text: "Use the Force, Luke.",
    user: "Obi-Wan Kenobi",
    added: getNewDate(),
  },
];

module.exports = messages;
