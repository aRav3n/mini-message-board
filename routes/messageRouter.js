const { Router } = require("express");
const router = Router();

function returnValue(links, messages) {
  router.get("/:messageId", (req, res) => {
    const id = req.params.messageId;
    const message = messages[id];

    if (message) {
      res.render("currentMessage", { links: links, message: message });
    } else {
      res.status(404).render("errorPage");  
    }
  });

  return router;
}

module.exports = returnValue;
