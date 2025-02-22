require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");  // To hash and compare passwords
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
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const newUser = new User({
            username,
            email,
            password: hashedPassword, // Save the hashed password
        });

        await newUser.save();
        res.status(201).json({ message: "User saved!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Login Route
app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare the password from the request with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // If email and password match, you can send a success message or JWT token
        res.status(200).json({ message: "Login successful!" });

        // Optionally, you can also generate a JWT token here for client-side session management
        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // res.json({ token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start Server
app.listen(5002, () => console.log("Server running on port 5002"));
