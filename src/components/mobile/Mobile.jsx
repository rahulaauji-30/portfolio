import { Outlet } from "react-router-dom"
import Links from "../Web/Links"
import About from "./AboutM"
import Navm from "./Navm"
export default function Mobile(){

    return(
        <div className="mobile" style={{padding:"30px",alignItems:"center"}}>
            <img src="pp2.png" style={{height:"200px",width:"200x",borderRadius:"50%",border:"5px solid #E1F0DA",margin:"10px auto",display:"flex",justifyContent:"center"}}/>
            <div style={{display:"flex",flexDirection:"column",fontFamily: 'Grand Hotel',alignItems:"center"}}>
              <h2 className="name">Rahul Parihar</h2>
              <p className="designation">Web & Software</p>
              <p className="designations">Devloper</p>
            </div>
            <Links/>
            <hr/>
            <Navm/>
            <Outlet/>
        </div>
    )
}