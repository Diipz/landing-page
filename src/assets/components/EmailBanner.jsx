import "../styles/email-banner.css"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

export default function EmailBanner({ className }) {

    EmailBanner.propTypes = {
      className: PropTypes.string,
    };

    return (
      <a href="mailto:dip100patel@gmail.com">
        <Typography variant={"body1"} className={`banner ${className}`} sx={{
          fontSize: "0.9rem",
        }}> 
            <span id="email">dip100patel@gmail.com</span>
        </Typography>
      </a>
    )
  }

  




