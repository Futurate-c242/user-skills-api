const express = require("express");
const router = express.Router();
const { addUserSkills } = require("../services/firestoreService");

// Endpoint untuk menambah user skills
router.post("/add", async (req, res) => {
  try {
    const { user_id, user_skills } = req.body;

    const message = await addUserSkills(user_id, user_skills);
    res.status(200).json({ message });
  } catch (error) {
    console.error("Error adding skills:", error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
