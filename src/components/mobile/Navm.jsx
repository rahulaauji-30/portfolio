import { NavLink } from "react-router-dom";

export default function Navm(){
    const resumePath = '/resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'resume.pdf';
    link.click();
  };
    return(
        <div className="navm" style={{display:"flex",justifyContent:"space-between",fontSize:"16px",marginBottom:"0px"}}>
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"projects"}>Projects</NavLink>
            <NavLink to={"blog"}>Blogs</NavLink>
            <NavLink to={"resume"} onClick={handleDownload}>Resume</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </div>
    )
}