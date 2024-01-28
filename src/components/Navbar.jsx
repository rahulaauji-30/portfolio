import { NavLink } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
export default function Navbar(props){
    const [isVisible,setVisible] = useState(true)
    function handleVisibility(){
        setVisible(pre => !pre)
    }
    const navs = [
      {
        title:"About",
        hyper:"/"
      },
      {
        title:"Projects",
        hyper:"projects"
      },
      {
        title:"Resume",
        hyper:"resume"
      },
      {
        title:"Contact",
        hyper:"contact"
      }
    ]
    return(
        <>
            <div className="sidelinks">
                <p>Navbar</p>
                {
                    isVisible?<ExpandLessIcon onClick={handleVisibility} style={{cursor:"pointer"}}/>:<ExpandMoreIcon onClick={handleVisibility} style={{cursor:"pointer"}}/>
                }
            </div>
            <ul className="sidelink-content" style={{display:isVisible?"block":"none"}}>
                {
                    navs.map(nav=>{
                        return <li>
                          <NavLink to={nav.hyper}>{nav.title}</NavLink>
                        </li>
                    })
                }
            </ul>
        </>
    )
}