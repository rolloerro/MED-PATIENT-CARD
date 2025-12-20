import express from "express";
import dotenv from "dotenv";
import patientCardRoute from "./routes/patientCard.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.get("/", (req, res) => {
  res.json({
    service: "MED-PATIENT-CARD",
    status: "running",
    endpoints: {
      createCard: "POST /patient-card"
    }
  });
});
app.post("/patient-card", patientCardRoute);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`🩺 MED-PATIENT-CARD running on http://localhost:${PORT}`);
});

