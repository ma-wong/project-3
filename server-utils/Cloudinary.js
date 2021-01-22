const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dnjau9tbe",
    api_key: "621564855937925",
    api_secret: "udP9e59xLTk0A57OB59a_rW-_xM",
});

module.exports = { cloudinary };