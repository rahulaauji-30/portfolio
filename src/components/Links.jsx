import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

export default function Links(){

    return(
        <div style={{display:"flex",justifyContent:"space-between",color:"green",gap:"30px",marginTop:"20px"}}>
            <InstagramIcon/>
            <GitHubIcon/>
            <MailIcon/>
        </div>
    )
}