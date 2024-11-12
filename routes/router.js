const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

/*

app.use("/message", messageDetailsRouter);

app.get("*", (req, res) =>
  res.status(404).render("errorPage", { links: links })
);
*/

router.get("/", controller.indexGet);
router.get("/new", controller.newGet);
router.post("/new", controller.newPost);

module.exports = router;
