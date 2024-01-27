import Sidelinks from "./Sidelinks"
import Links from "./Links"
export default function Sidebar(){

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
    return(
        <div className="sidebar">
            <img src="/profile.jpg"/>
            <Sidelinks title="Social Media" links={link}/>
            <Links/>
        </div>
    )
}