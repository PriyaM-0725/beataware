const express = require("express");
const path = require("path");
const app = express();
const PORT = 5001;

// Serve static files from the current folder
app.use(express.static(__dirname));

// Default route to serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
