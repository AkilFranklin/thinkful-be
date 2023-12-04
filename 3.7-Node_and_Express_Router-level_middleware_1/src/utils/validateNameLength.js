function validateNameLength(req, res, next) {
    const name = req.params.name;
    if (name.length > 2) {
        next();
    } else {
        next("Name length is too short.")
    }
}

module.exports = validateNameLength;
