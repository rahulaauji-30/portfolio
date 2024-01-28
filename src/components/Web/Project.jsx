import { useState } from "react"


export default function Project(props){
    const [isHover,setHover] = useState(false)
    const handleHover = ()=>{
        setHover(pre=>!pre)
    }
    return(
        <div className="project"  onMouseOver={handleHover} onMouseOut={handleHover}>
            <img src={props.src} style={{
                transform:isHover&&'scale(1.01)',
                filter: isHover&&'blur(2px)'
            }}/>
            <button>{props.title}</button>
        </div>
    )
}