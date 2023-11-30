const mongoose = require("mongoose");
const signupSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    phoneno: { type: String, required: true },
    role: { type: String },
    gender: { type: String },
  },
  { collection: "signup" }
);

const signupModel = mongoose.model("signup", signupSchema);
module.exports = { signupModel };
