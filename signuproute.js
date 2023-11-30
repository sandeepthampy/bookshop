const express = require("express");
const signupRoute = express.Router();
const { signupModel } = require("./signupmodel");

signupRoute.post("/add", async (req, res) => {
  const { name, email, password, phoneno, role, gender } = req.body;
  if (!name || !email || !password || !phoneno || !role || !gender) {
    return res.status(400).json({ message: "All field are required" });
  }

  const newsignup = new signupModel({
    name,
    email,
    password,
    phoneno,
    role,
    gender,
  });
  await newsignup.save();
  return res.status(201).json({ message: "Saved", newsignup });
});

signupRoute.post("/userlogin", async (req, res) => {
  
  const {email,password} = req.body;
  console.log(email,'email')
  console.log(password,'password')
  if (!email || !password) {
    return res.status(400).json({ message: " email and password required" });
  }
  const user = await signupModel.findOne({ email });
  console.log(user,'user')
  if (!user) {
    return res.status(401).json({ message: "email not found" });
  }
  
  if (user.email === email && user.password === password) {
    return res.status(200).json({ message: "login success", user });
  }
  return res.status(400).json({ message: "login failed" });
});

module.exports = { signupRoute };
