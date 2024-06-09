import axios from "axios";
import { useEffect } from "react";

function PdfGenerator() {
  useEffect(() => {
    const loadPdf = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API}/pdf/html-to-pdf`
        );

        const pdfBuffer = response.data.pdfBuffer;
        const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });

        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(pdfBlob);
        downloadLink.download = "generated_pdf.pdf";
        downloadLink.click();
      } catch (error) {}
    };

    loadPdf();
  }, []);

  return <div>PdfGenerator</div>;
}

export default PdfGenerator;
