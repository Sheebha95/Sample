const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");

// Signup logic
const signup = async (req, res) => {
  console.log("signup");
  try {
    const { username, email, password } = req.body;
    console.log(req.body);

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    console.log(existingUser);

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const existingemail = await User.findOne({ email });
    console.log(existingemail);
    if (existingemail) {
      return res.status(400).json({ error: "email already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    console.log(saltRounds);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);

    // Create a new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "the user save successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signin = async (req, res) => {
  try {
    const { mailuserId, password } = req.body;
    console.log("mailuserId", mailuserId, "password", password);
     // const existingUser = await User.findOne({ username:mailuserId });   
    // const existingemail=await User.findOne({ email:mailuserId });
    // if (!existingUser || existingemail ) {
    //   return res.status(403).json({ message: "Invalid Credentials" });
    // }
    // const user=existingUser?existingUser:existingemail
    const user = await User.findOne({
      $or: [
        { username: { $regex: mailuserId, $options: "i" } },
        { email: { $regex: mailuserId, $options: "i" } },
      ],
    });
    console.log(user);
    // user=[{_id:"hefhghegedh",username:"rakesh",email:"r@gmail.com",password:"dfewhfhwgfhfed4215qwfgd"}]   //const user = await User.find({
    //user={_id:"hefhghegedh",username:"gjhwgedhw",email:"r@gmail.com",password:"dfewhfhwgfhfed4215qwfgd"}   //const user = await User.findOne({

    if (!user) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    console.log("matchedPassword", matchedPassword);
    if (!matchedPassword) {
      return res.status(401).json({ error: "Invalid credential" });
    }
    const token = jwt.sign({ userId: user._id }, "This is my JWT secrete code", {
      expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signup, signin };