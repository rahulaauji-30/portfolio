import Links from "./Links";
import Social from "./Social";

export default function Resume(){
    const resumePath ="/resume.pdf"
    const link = document.createElement('a')
    link.href = resumePath
    link.download = "resume.pdf"
    return(
        <div className="resume" style={{justifyContent:"center",margin:"300px auto"}}>
            <h1>Thank you for downloading my Resume</h1>
            <p>Connect me here</p>
            <Social/>
        </div>
    )
}