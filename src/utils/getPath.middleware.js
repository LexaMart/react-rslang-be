const getStringPath = (req, res, next) => {
  try {
    console.log(req.body);
    req.body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file ? req.file.path : '/standart path'
    };
    return next();
  } catch (e) {
    console.log(e);
  }
};
module.exports = getStringPath;
