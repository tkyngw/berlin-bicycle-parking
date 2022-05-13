const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String, unique: true, required: true }
  },
);

const User = model("User", userSchema);

module.exports = User;
