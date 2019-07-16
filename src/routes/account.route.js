const express = require("express");
const app = express();
const accountRoutes = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

let User = new Schema({
  username: { type: String },
  password: { type: String }
}, {
    collection: 'users'
  });

var userModel = mongoose.model('User', User);

accountRoutes.route("/register").post(async function (request, response) {
  var user = await userModel.findOne({ username: request.body.username }).exec();
  if (user) {
    response.send({message: "Username already exists"})
  }
  var userMod = new userModel(request.body);
  console.log('req body ' + request.body.password)
  var salt = bcrypt.genSaltSync(10);
  userMod.password = bcrypt.hashSync(request.body.password, salt);
  var result = userMod.save();
  response.status(200).send({message: "Registration Successful!"});
});

accountRoutes.route("/login").post(async function (request, response) {
  var user = await userModel.findOne({ username: request.body.username }).exec();
  console.log('user is ' + user)
  if (!user) {
    return response.status(400).send({ message: "The username does not exist" });
  }
  if (!bcrypt.compareSync(request.body.password, user.password)) {
    return response.status(400).send({ message: "The password is invalid" });
  }
  response.send({ message: "The username and password combination is correct!" });

})


module.exports = accountRoutes;
