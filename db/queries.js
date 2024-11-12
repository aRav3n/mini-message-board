const pool = require("./pool");

function convertFormatOfMessages(databaseMessageArray) {
  const returnArray = [];

  for (let i = 0; i < databaseMessageArray.length; i++) {
    const object = databaseMessageArray[i];
    const newObject = {};
    newObject.text = object.text;
    newObject.user = object.being;
    newObject.added = object.added;
    returnArray.push(newObject);
  }

  return returnArray;
}

async function getMessages() {
  const { rows } = await pool.query("SELECT text, being, added FROM messages");
  const returnArray = convertFormatOfMessages(rows);
  return returnArray;
}

async function submitNewMessage(name, messageText) {
  await pool.query("INSERT INTO messages (text, being) VALUES ($1, $2)", [
    messageText,
    name,
  ]);
}

module.exports = {
  getMessages,
  submitNewMessage,
};
