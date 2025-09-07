import React from "react";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

export default function PdfDownloadButton({ targetId }) {
  const handleDownload = async () => {
    const node = document.getElementById(targetId);
    if (!node) return;

    try {
      // Convert node to PNG (no border issue)
      const dataUrl = await toPng(node, { cacheBust: true });

      // Create PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("financial-dashboard.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition"
    >
      Download PDF
    </button>
  );
}
