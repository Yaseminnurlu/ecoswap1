require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
  });
  

const User = mongoose.model("User", UserSchema);

// Register Route
app.post("/api/auth/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User saved!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

  

// Start Server
app.listen(5002, () => console.log("Server running on port 5002"));

