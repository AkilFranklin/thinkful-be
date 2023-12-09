const ratings = require("../data/ratings-data");

function list(req, res) {
  const { noteId } = req.params;
  const filteredRatings = ratings.filter(noteId ? rating => rating.noteId == noteId : () => true);
  if (filteredRatings.length < 2) {
      res.json({ data: filteredRatings[0] });
  } else {
    res.json({ data: filteredRatings });
  }
}

function ratingExists(req, res, next) {
    const { ratingId } = req.params;
    console.log(ratingId)
    const foundRating = ratings.find(rating => rating.id === Number(ratingId));
    console.log(foundRating)
    if (foundRating) {
      res.locals.rating = foundRating;
      return next();
    }
    next({
      status: 404,
      message: `Rating id not found: ${ratingId}`,
    });
  };


function read(req, res) {
  const { ratingId } = req.params;
  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));
  console.log(res.locals.rating)
  res.json({ data: res.locals.rating });
}


function read(req, res, next) {
  res.json({ data: res.locals.rating });
};

module.exports = {
  list,
  read: [ratingExists, read],
  ratingExists
};
