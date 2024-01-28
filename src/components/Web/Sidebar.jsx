import { useState } from "react";
import Sidelinks from "./Sidelinks"
import Links from "./Links"
import Navbar from "./Navbar"
export default function Sidebar(){
  const [expandedSidelinks, setExpandedSidelinks] = useState({
    navbar:true,
    education:false,
    certification:false,
    social:false
  });

  const handleSidelinksClick = (e) => {
      setExpandedSidelinks((prev)=>{
        if(e.target.name==="education"){
          return{
            navbar:false,
            education:true,
            certification:false,
            social:false
          }
        }
        else if(e.target.name==="education"){
          return {
            navbar:false,
            education:false,
            certification:true,
            social:false
          }
        }else if(e.target.name==="social"){
          return {
            navbar:false,
            education:false,
            certification:false,
            social:true
          }
        }
      })
  };
    const link = [
        {
          title:"Instagram",
          hyper:"www.instagram.com"
        },
        {
          title:"Facebook",
          hyper:"www.facebook.com"
        },
      ]
    const certification = [
      {
        title:"Web development",
        hyper:"www.udemy.com"
      },
      {
        title:"iOS development",
        hyper:"www.udemy.com"
      },
      {
        title:"Python development",
        hyper:"www.udemy.com"
      }
    ]
    const education = [
      {
        title:"BSC in Computer Science",
        hyper:"www.vupune.ac.in"
      },
      {
        title:"Higher Secondary Certificate",
        hyper:"www.vupune.ac.in"
      },
      {
        title:"Secondary School Certificate",
        hyper:"www.vupune.ac.in"
      },
    ]
    
    function handleCollapsed(){

    }

    return(
        <div className="sidebar">
            <img src="/profile.png"/>
            <div style={{display:"flex",flexDirection:"column",fontFamily: 'Grand Hotel',alignItems:"center"}}>
              <h2 className="name">Rahul Parihar</h2>
              <p className="designation">Web & Software</p>
              <p className="designations">Devloper</p>
            </div>
            <Links/>
            <hr/>
            <Navbar name="navbar" expanded={expandedSidelinks.navbar} onClick={handleSidelinksClick}/>
            <Sidelinks
                name="education"
                title="Education"
                links={education}
                expanded={expandedSidelinks.education}
                onClick={handleSidelinksClick}
            />
            <Sidelinks
            name="certification"
                title="Certifications"
                links={certification}
                expanded={expandedSidelinks.certification}
                onClick={handleSidelinksClick}
            />
            <Sidelinks
            name="social"
                title="Social Media"
                links={link}
                expanded={expandedSidelinks.social}
                onClick={handleSidelinksClick}
            />
        </div>
    )
}