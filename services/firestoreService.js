const { getFirestore, doc, getDoc, setDoc } = require("firebase/firestore");
const app = require("../config/firebase");

// Inisialisasi Firestore
const db = getFirestore(app);

// Fungsi untuk menambahkan user skills
async function addUserSkills(user_id, user_skills) {
  if (!user_id || !Array.isArray(user_skills)) {
    throw new Error("Invalid input data");
  }

  // Periksa apakah user ada di koleksi users
  const userDocRef = doc(db, "users", user_id);
  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
    throw new Error("User not found");
  }

  // Tambahkan data ke koleksi user-skills
  const userSkillsDocRef = doc(db, "user-skills", user_id);
  await setDoc(userSkillsDocRef, { user_id, user_skills });

  return "Skills added successfully";
}

module.exports = { addUserSkills };
