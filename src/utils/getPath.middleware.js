/* eslint-disable require-atomic-updates */
const FormData = require('form-data');
const imgbbUploader = require('imgbb-uploader');

const getStringPath = async (req, res, next) => {
  const imageApiKey = '948e7407a5c5c0867bc94c04d80b8d45';
  try {
    let ress =
      'https://www.vippng.com/png/detail/385-3856307_png-file-svg-user-icon.png';
    const form = new FormData();
    if (req.file) {
      const image = Buffer.from(req.file.buffer).toString('base64');
      form.append('image', req.file.buffer);
      const options = {
        apiKey: imageApiKey, // MANDATORY

        base64string: image
      };
      ress = await imgbbUploader(options);
      console.log(ress);
    }
    req.body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file ? ress.thumb.url : ress
    };
    return next();
  } catch (e) {
    console.log(e);
  }
};
module.exports = getStringPath;
