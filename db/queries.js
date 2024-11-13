const pool = require("./pool");

async function getMessageDetails(id) {
  const { rows } = await pool.query(
    "SELECT text, being AS user, added, id FROM messages WHERE id = $1",
    [id]
  );
  return rows[0];
}

async function getMessages() {
  const { rows } = await pool.query(
    "SELECT text, being AS user, added, id FROM messages"
  );
  return rows;
}

async function submitNewMessage(name, messageText) {
  await pool.query("INSERT INTO messages (text, being) VALUES ($1, $2)", [
    messageText,
    name,
  ]);
}

module.exports = {
  getMessageDetails,
  getMessages,
  submitNewMessage,
};
