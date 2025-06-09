import express from "express";
import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_KEY_JSON);

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://kutsekoolid-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = getDatabase();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Tervitusroute
app.get("/", (req, res) => {
  res.send("Server töötab!");
});

// GET /professions – Avalik
app.get("/professions", async (req, res) => {
  try {
    const snapshot = await db.ref("/professions").once("value");
    const data = snapshot.val();
    res.json(data);
  } catch (err) {
    console.error("Viga professionide laadimisel:", err);
    res.status(500).json({ error: "Andmete laadimine ebaõnnestus" });
  }
});

// Middleware: kontrolli Firebase ID tokenit
import { getAuth } from "firebase-admin/auth";

const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Autentimine puudub" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await getAuth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("ID-tokeni viga:", err);
    return res.status(403).json({ error: "Kehtetu ID-token" });
  }
};

// PUT /professions – Ainult sisselogitud kasutajale
app.put("/professions", verifyFirebaseToken, async (req, res) => {
  const newData = req.body;

  if (!Array.isArray(newData)) {
    return res.status(400).json({ error: "Andmed peavad olema massiivina" });
  }

  try {
    await db.ref("/professions").set(newData);
    res.json({ message: "Professionid edukalt uuendatud" });
  } catch (err) {
    console.error("Viga salvestamisel:", err);
    res.status(500).json({ error: "Salvestamine ebaõnnestus" });
  }
});

app.listen(port, () => {
  console.log(`Server töötab: http://localhost:${port}`);
});
