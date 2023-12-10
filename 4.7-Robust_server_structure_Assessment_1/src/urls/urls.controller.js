const path = require("path");
const urls = require(path.resolve("src/data/urls-data"));
const uses = require("../data/uses-data");

function create(req, res) {
  const { data: { href } = {} } = req.body;
  console.log(req.body);
  const newUrl = {
    id: urls.length + 1,
    href,
  };
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
}

function hasHref(req, res, next) {
  const { data: { href } = {} } = req.body;

  if (href) {
    return next();
  }
  next({ status: 400, message: "An 'href' property is required." });
}

function list(req, res) {
  res.json({ data: urls });
}

function urlExists(req, res, next) {
  const urlId = Number(req.params.urlId);
  const foundUrl = urls.find((url) => url.id === urlId);
  if (foundUrl) {
    return next();
  }
  next({
    status: 404,
    message: `Url id not found: ${req.params.urlId}`,
  });
}

function read(req, res) {
  const urlId = Number(req.params.urlId);
  const foundUrl = urls.find((url) => (url.id = urlId));
  res.json({ data: foundUrl });
  const newUse = {
    id: uses.length ? uses.length + 1 : 1,
    urlId,
    time: Date.now(),
  };
  uses.push(newUse);
}

function update(req, res) {
  const urlId = Number(req.params.urlId);
  const foundUrl = urls.find((url) => url.id === urlId);

  const { data: { href } = {} } = req.body;

  foundUrl.href = href;

  res.json({ data: foundUrl });
}

module.exports = {
  create: [hasHref, create],
  list,
  read: [urlExists, read],
  update: [urlExists, hasHref, update],
  urlExists,
};
