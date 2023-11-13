import React, { useState } from 'react';
import Papa from 'papaparse';
import XLSX from 'xlsx/dist/xlsx.full.min.js';

function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
}

function EmailUploader() {
  const [emails, setEmails] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.name.endsWith('.csv')) {
        // Parse CSV
        Papa.parse(file, {
          complete: (result) => {
            const parsedEmails = result.data
              .flat()
              .filter((email) => isValidEmail(email));
            setEmails(parsedEmails);
          },
        });
      } else if (file.name.endsWith('.xlsx')) {
        // Parse XLSX
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const emailData = XLSX.utils.sheet_to_json(sheet, { header: 'A' });
          const parsedEmails = emailData
            .map((item) => item.A)
            .filter((email) => isValidEmail(email));
          setEmails(parsedEmails);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <div>
      <h1>Email Uploader</h1>
      <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmailUploader;
