const middleware = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next(); //Devam et
};
module.exports = middleware;
