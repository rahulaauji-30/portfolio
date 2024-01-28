import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Links(){

    return(
        <div style={{display:"flex",justifyContent:"space-between",color:"green",gap:"30px",marginTop:"20px"}}>
            <InstagramIcon className='icons'/>
            <GitHubIcon className='icons'/>
            <LinkedInIcon className='icons'/>
            <MailIcon className='icons'/>
        </div>
    )
}