import "../styles/header.css"
import Box from "@mui/material/Box"
import HexagonRoundedIcon from '@mui/icons-material/HexagonRounded';
import Typography from '@mui/material/Typography';




export default function Header() {
  return (
    <>
      <Box className="header-container">
        <div className="icon-container">
          <HexagonRoundedIcon className="hexagon" sx={{
            fontSize: 80
          }} />
          <h1>
            D
          </h1>
        </div>
        <div className="navbar">
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Experience</Typography>
          <Typography variant="h6">Services</Typography>
          <Typography variant="h6">Contact</Typography>
        </div>
      </Box>
    </>
  )
}


