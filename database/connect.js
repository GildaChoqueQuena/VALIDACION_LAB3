const mongoose = require('mongoose');
mongoose.connect("mongodb://172.23.0.2:27017/crud");
module.exports = mongoose;
