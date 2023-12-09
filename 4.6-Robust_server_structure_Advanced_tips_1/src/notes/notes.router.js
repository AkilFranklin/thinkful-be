const router = require("express").Router();
const ratingsRouter = require("../ratings/ratings.router");
const controller = require("../notes/notes.controller");
const ratingsController = require("../ratings/ratings.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.use("/:noteId/ratings/:ratingId", controller.noteExists, ratingsController.ratingExists, ratingsRouter).all(methodNotAllowed);
router.use("/:noteId/ratings", controller.noteExists, ratingsRouter).all(methodNotAllowed);

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router.route("/").get(controller.list);

module.exports = router;
