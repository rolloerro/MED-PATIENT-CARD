import { generatePDF } from "../services/generatePDF.js";

export default async function patientCardRoute(req, res) {
  try {
    const data = req.body;

    if (!data?.patient?.lastName || !data?.patient?.firstName) {
      return res.status(400).json({
        status: "error",
        message: "Patient name is required"
      });
    }

    const pdfBuffer = await generatePDF(data);

    res.json({
      status: "ok",
      cardId: `MPC-${Date.now()}`,
      data,
      pdf: pdfBuffer.toString("base64")
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }}
