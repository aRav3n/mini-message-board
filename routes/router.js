const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/", controller.indexGet);
router.get("/new", controller.newGet);
router.post("/new", controller.newPost);
router.get("/message/:messageId", controller.messageDetailGet);
router.use("*", controller.errorGet);

module.exports = router;
