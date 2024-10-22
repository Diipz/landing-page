import "../styles/logo-banner.css"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

export default function LogoBanner({ className }) {

    LogoBanner.propTypes = {
      className: PropTypes.string,
    };

    return (
      <div className={`banner2-wrapper ${className}`}>
        <div className="socials-banner">
        <a href="https://www.linkedin.com/in/dipesh-patel-a87b9a333/" target="_blank">
          <img src="./images/linkedin_icon.png" alt="linkedin icon" width="40px" /> 
        </a>
        <a href="mailto:dip100patel@gmail.com" target="_blank">
          <img src="./images/mail_icon.png" alt="mail icon" width="40px" />
        </a>
        <a href="https://t.me/mpharm_dipesh" target="_blank">
          <img src="./images/telegram_icon.png" alt="telegram icon" width="34px" /> 
        </a>
        </div>
        <Typography variant={"body1"} className="banner2" sx={{
          fontSize: "0.8rem"
        }}> 
        </Typography>
      </div>
        

    )
  }