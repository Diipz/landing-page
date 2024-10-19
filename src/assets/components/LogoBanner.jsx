import "../styles/logo-banner.css"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

export default function LogoBanner({ className }) {

    LogoBanner.propTypes = {
      className: PropTypes.string,
    };

    return (
      <div className={`banner2-wrapper ${className}`}>
        <img src="./images/pharmacy_logo.png" alt="pharmacist-emblem" className="pharmacy-logo"/>
        <Typography variant={"body1"} className="banner2" sx={{
          fontSize: "0.8rem"
        }}> 
        </Typography>
      </div>
        

    )
  }