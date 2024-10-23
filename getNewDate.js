// Adapted from https://github.com/Orion-Barjamaj/MiniMessageBoard/blob/main/app.js
function newDate() {
  const date = new Date();

  const formattedDate = date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedDate;
}

module.exports = newDate;
