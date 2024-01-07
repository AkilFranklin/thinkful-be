const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const methodNotAllowed = require("../errors/methodNotAllowed");

async function reviewExists(request, response, next) {
  const { review_id } = request.params;
  const review = await service.read(review_id);
  if (review) {
    response.locals.review = review;
    return next();
  }
  return next({ status: 404, message: `Review cannot be found.` });
}

async function destroy(request, response) {
  // TODO: Write your code here 
  const { review_id } = request.params;
  await service.delete(review_id);
  response.sendStatus(204);
}

async function list(request, response) {
  // TODO: Write your code here
  const { movie_id } = request.params;
  const reviews = await service.list(movie_id);

  // console.log(reviews);
  response.json({data: reviews });
}

function hasmovie_idInPath(request, response, next) {
  if (request.params.movie_id) {
    return next();
  }
  methodNotAllowed(request, response, next);
}

function nomovie_idInPath(request, response, next) {
  if (request.params.movie_id) {
    return methodNotAllowed(request, response, next);
  }
  next();
}

async function update(request, response) {
  // TODO: Write your code here
  console.log("here 1")
  // console.log(response.locals.review)
  console.log(request.body)
  console.log("here 2")
  const updatedReview = {
    ...response.locals.review,
    ...request.body.data,
    review_id: response.locals.review.review_id,
  };
  console.log("here 3")
  const data = await service.update(updatedReview);
  console.log(data)
  res.json({ data });
}

module.exports = {
  delete: [
    nomovie_idInPath,
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(destroy),
  ],
  list: [hasmovie_idInPath, asyncErrorBoundary(list)],
  update: [
    nomovie_idInPath,
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(update),
  ],
};
