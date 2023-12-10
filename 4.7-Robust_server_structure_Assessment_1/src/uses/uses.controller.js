const uses = require("../data/uses-data");

function list(req, res, next) {
  const { urlId } = req.params;
  const filteredUses = uses.filter(
    urlId ? (use) => use.urlId == urlId : () => true
  );

  if (filteredUses.length > 0) {
    res.json({ data: filteredUses });
  } else {
    next({ status: 404, message: `Url ${req.originalUrl} id has no uses` })
  }
}

function useExists(req, res, next) {
  const { useId } = req.params;
  const foundUse = uses.find((use) => use.id === Number(useId));
  if (foundUse) {
    res.locals.use = foundUse;
    return next();
  }
  next({
    status: 404,
    message: `Use id not found for: ${req.originalUrl}`,
  });
}

function read(req, res, next) {
  res.json({ data: res.locals.use });
}

function destroy(req, res) {
  const { useId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  if (index > -1) {
    uses.splice(index, 1);
  }
  res.sendStatus(204);
}

module.exports = {
  list,
  read: [useExists, read],
  useExists,
  delete: [useExists, destroy],
};
