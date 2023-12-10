const router = require("express").Router();
const controller = require("../urls/urls.controller");
const usesController = require("../uses/uses.controller")
const usesRouter = require("../uses/uses.router");
const methodNotAllowed = require("../errors/methodNotAllowed")

router.use("/:urlId/uses", usesRouter).all(methodNotAllowed);

router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
