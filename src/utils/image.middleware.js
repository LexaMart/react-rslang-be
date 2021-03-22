const multer = require('multer');

const storage = multer.diskStorage({
  destination: './users-avatars/',
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname + Date.now()}-${Math.round(Math.random() * 1e9)}`
    );
  }
});

module.exports = multer({ storage });
