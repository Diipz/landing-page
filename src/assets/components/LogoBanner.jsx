import "../styles/logo-banner.css"
import Typography from '@mui/material/Typography';

export default function LogoBanner() {
    return (
      <div className="banner2-wrapper">
        <img src="./images/pharmacy_logo.png" className="pharmacy-logo"/>
        <Typography variant={"body1"} className="banner2" sx={{
          fontSize: "0.8rem"
        }}> 
        </Typography>
      </div>
        
      
    )
  }