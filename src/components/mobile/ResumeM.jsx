import React from 'react';
import Social from '../Web/Social';

export default function ResumeM() {
    const resumePath = '/resume.pdf';

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'resume.pdf';
      link.click();
    };

  return (
    <div className="resume fade-in" style={{ justifyContent: 'center' }}>
      {/* <p>If download not started</p>
      <button onClick={handleDownload} style={{display:"flex",justifyContent:"center",justifyItems:"center",backgroundColor:"#E1F0DA",borderRadius:"2px",padding:"5px",color:"green",border:"none"}}>Download Resume</button> */}
      <h1>Thank you for downloading my Resume</h1>
      <p>Connect with me here</p>
      <Social />
    </div>
  );
}