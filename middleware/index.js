exports.logger = (req, res, next) => {
  console.log(`✅ Request received, Method: ${req.method}, URL: ${req.url}`);

  next();
};
