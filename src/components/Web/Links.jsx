import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
export default function Links(){

    return(
        <div style={{display:"flex",justifyContent:"space-between",color:"green",gap:"30px",marginTop:"20px"}}>
            <NavLink
        to="https://www.instagram.com/rahul_aauji_30?igsh=a3Y1endvZ3BjZDJ6"
        style={{ textDecoration: "none", color: "green" }}
      >
        <InstagramIcon className="icons" color="green" />
      </NavLink>
      <NavLink
        to="https://github.com/rahulaauji-30"
        style={{ textDecoration: "none", color: "green" }}
      >
        <GitHubIcon className="icons" style={{ fill: "green" }} />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/rahul-parihar-028200277/"
        style={{ textDecoration: "none", color: "green" }}
      >
        <LinkedInIcon className="icons" style={{ fill: "green" }} />
      </NavLink>
      <NavLink
        to="mailto:rahulaauji71@gmail.com"
        style={{ textDecoration: "none", color: "green" }}
      >
        <MailIcon className="icons" style={{ fill: "green" }} />
      </NavLink>
        </div>
    )
}