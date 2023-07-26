var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  // email: {

  //     type: email,
  //     required: true
  // },
  // password: {

  //     type: password,
  //     required: true
  // }
});

module.exports = mongoose.model("employees", userSchema);
