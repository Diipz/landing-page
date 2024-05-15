import "../styles/email-banner.css"
import Typography from '@mui/material/Typography';

export default function EmailBanner() {
    return (
      <>
        <Typography variant={"body1"} className="banner" sx={{
          fontSize: "0.9rem",
        }}> 
            <span id="email">dip_patel100@hotmail.com</span>
        </Typography>
      </>
    )
  }




