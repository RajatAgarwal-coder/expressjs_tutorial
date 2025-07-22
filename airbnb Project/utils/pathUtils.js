// In place of Absolute path we can use relative path

const path = require("path");

module.exports = path.dirname(require.main.filename)