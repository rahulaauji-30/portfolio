import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Social(){

    return(
        <div style={{display:"flex",color:"green",gap:"30px",justifyContent:"center"}}>
            <InstagramIcon className='icons'/>
            <GitHubIcon className='icons'/>
            <LinkedInIcon className='icons'/>
            <MailIcon className='icons'/>
        </div>
    )
}