import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
export default function Sidelinks(props){
    const [isVisible,setVisible] = useState(false)
    function handleVisibility(){
        setVisible(pre => !pre)
    }

    return(
        <>
            <div className="sidelinks">
                <p>{props.title}</p>
                <ExpandMoreIcon onClick={handleVisibility} style={{cursor:"pointer"}}/>
            </div>
            <ul className="sidelink-content" style={{display:isVisible?"none":"block"}}>
                {
                    props.links.map(link=>{
                        return <li><a href={link.hyper}>
                        {link.title} 
                        </a></li>
                    })
                }
            </ul>
        </>
    )
}