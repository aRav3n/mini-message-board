const getNewDate = require("../getNewDate");
const { getMessageArray } = require("../controllers/controller");

const databaseArray = [
  {
    text: 'May the Force be with you.',
    being: 'Luke Skywalker',
    added: 2024-11-12T15:00:43.429Z
  },
  {
    text: 'Never tell me the odds.',
    being: 'Han Solo',
    added: 2024-11-12T15:00:43.429Z
  },
  {
    text: "Help me, Obi-Wan Kenobi. You're my only hope.",
    being: 'Princess Leia',
    added: 2024-11-12T15:00:43.429Z
  },
  {
    text: 'I am your father.',
    being: 'Darth Vader',
    added: 2024-11-12T15:00:43.429Z
  },
  {
    text: 'Use the Force, Luke.',
    being: 'Obi-Wan Kenobi',
    added: 2024-11-12T15:00:43.429Z
  }
]

const messages = [
  {
    text: "May the Force be with you.",
    user: "Luke Skywalker",
    added: getNewDate(),
    id: 0,
  },
  {
    text: "Never tell me the odds.",
    user: "Han Solo",
    added: getNewDate(),
    id: 1,
  },
  {
    text: "Help me, Obi-Wan Kenobi. You're my only hope.",
    user: "Princess Leia",
    added: getNewDate(),
    id: 2,
  },
  {
    text: "I am your father.",
    user: "Darth Vader",
    added: getNewDate(),
    id: 3,
  },
  {
    text: "Use the Force, Luke.",
    user: "Obi-Wan Kenobi",
    added: getNewDate(),
    id: 4,
  },
];

module.exports = messages;
