const middleware = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  console.log(req.url.search("/auths"));
  if (req.session.user) next(); //Devam et
  else res.send(401);
};
module.exports = middleware;
