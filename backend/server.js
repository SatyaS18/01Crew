// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API for 01Crew Website");
});

// Contact form API
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received Contact Form Submission:", { name, email, message });
  res
    .status(200)
    .json({ success: true, message: "Form submitted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
