function validateZip(req, res, next) {
  const zip = req.params.zip;
  const onlyContainsNumbers = (zip) => /^\d+$/.test(zip);
//   console.log(zip);
//   console.log(onlyContainsNumbers);
  if (zip.length === 5 && onlyContainsNumbers(zip) === true) {
    next();
  } else {
    next(`Zip (${zip}) is invalid!`);
  }
}

module.exports = validateZip;
