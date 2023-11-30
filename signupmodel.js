const mongoose = require("mongoose");
const signupSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneno: { type: String },
    role: { type: String },
    gender: { type: String },
  }
);

const signupModel = mongoose.model("signup", signupSchema);
module.exports = { signupModel };
