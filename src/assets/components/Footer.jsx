import { Typography } from "@mui/material"
import "../styles/footer.css"

export default function Footer() {
  return (
    <div id="footer">
        <Typography variant="subtitle2" id="footer-text">
            Developed by Dipesh Patel
        </Typography>
        <img id="github-logo" src="/public/images/github-mark-white.svg" alt="github" />
    </div>
  )
}


