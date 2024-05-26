import "../styles/email-banner.css"
import Typography from '@mui/material/Typography';

export default function EmailBanner() {
    return (
      <a href="mailto:dip100patel@gmail.com">
        <Typography variant={"body1"} className="banner" sx={{
          fontSize: "0.9rem",
        }}> 
            <span id="email">dip100patel@gmail.com</span>
        </Typography>
      </a>
    )
  }




