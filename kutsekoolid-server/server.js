import express from "express";
import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_KEY_JSON);

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://kutsekoolid-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = getDatabase();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server töötab!");
});

app.get("/professions", async (req, res) => {
  try {
    const snapshot = await db.ref("/professions").once("value");
    const data = snapshot.val();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Andmete laadimine ebaõnnestus" });
  }
});

app.listen(port, () => {
  console.log(`Server töötab: http://localhost:${port}`);
});
