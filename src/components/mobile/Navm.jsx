import { NavLink } from "react-router-dom";

export default function Navm(){
    return(
        <div className="navm" style={{display:"flex",justifyContent:"space-between",fontSize:"16px",marginBottom:"20px"}}>
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"projects"}>Projects</NavLink>
            <NavLink to={"resume"}>Resume</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </div>
    )
}