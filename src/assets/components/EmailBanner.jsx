import "../styles/email-banner.css"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

export default function EmailBanner({ className }) {

    EmailBanner.propTypes = {
      className: PropTypes.string,
    };

    return (
      <div>
        <Typography variant={"body1"} className={`banner ${className}`} sx={{
          fontSize: "0.9rem",
        }}>
          <a href="mailto:dip100patel@gmail.com"><span id="email">dip100patel@gmail.com</span>
          </a> 
        </Typography>
      </div>
    )
  }

  




