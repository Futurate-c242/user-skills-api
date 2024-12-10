const express = require("express");
const bodyParser = require("body-parser");
const userSkillsRoutes = require("./routes/userSkills");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/user-skills", userSkillsRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
