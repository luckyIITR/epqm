import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import file from "./Program.pdf";

function Programpdf() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    // className="all-page-container"
    <div className="pt-3 pb-5 all-page-container">
      <Document file={file}>
        {[1, 2, 3].map((page) => (
          <Page pageNumber={page} width={1200} />
        ))}
      </Document>
    </div>
  );
}

export default Programpdf;
