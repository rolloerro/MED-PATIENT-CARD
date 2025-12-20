import PDFDocument from "pdfkit";

export function generatePDF(payload) {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ margin: 40 });
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => resolve(Buffer.concat(buffers)));

    doc.fontSize(18).text("Electronic Patient Card", { align: "center" });
    doc.moveDown();

    const { patient, visit, diagnosis, complaints, notes } = payload;

    doc.fontSize(12).text(`Name: ${patient.lastName} ${patient.firstName} ${patient.middleName || ""}`);
    doc.text(`Birth date: ${patient.birthDate || "-"}`);
    doc.text(`Sex: ${patient.sex || "-"}`);
    doc.moveDown();

    if (visit) {
      doc.text(`Visit date: ${visit.date || "-"}`);
      doc.text(`Department: ${visit.department || "-"}`);
      doc.text(`Doctor: ${visit.doctor || "-"}`);
      doc.moveDown();
    }

    if (diagnosis) doc.text(`Diagnosis: ${diagnosis}`);
    if (complaints) doc.text(`Complaints: ${complaints}`);
    if (notes) doc.text(`Notes: ${notes}`);

    doc.end();
  });
}

