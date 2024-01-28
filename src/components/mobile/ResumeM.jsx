
import Social from "../Web/Social";

export default function ResumeM(){
    const resumePath ="/resume.pdf"
    const link = document.createElement('a')
    link.href = resumePath
    link.download = "resume.pdf"
    return(
        <div className="resume fade-in" style={{justifyContent:"center",}}>
            <h1>Thank you for downloading my Resume</h1>
            <p>Connect me here</p>
            <Social/>
        </div>
    )
}