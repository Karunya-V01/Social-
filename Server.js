const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Google Business Profile Node.js server is working!");
});

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Node.js API is working"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
