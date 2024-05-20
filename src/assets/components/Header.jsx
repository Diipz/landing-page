import "../styles/header.css"
import Box from "@mui/material/Box"
import HexagonRoundedIcon from '@mui/icons-material/HexagonRounded';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import useMediaQuery  from "@mui/material/useMediaQuery";
import { useState } from "react";


export default function Header() {

  const isMobileScreen = useMediaQuery(`(max-width:600px)`);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className="header-container">
        <a href="." className="icon-container">
          <HexagonRoundedIcon className="hexagon" sx={{
            fontSize: 80
          }} />
          <h1 className="logo-letter">
            D
          </h1>
        </a>
        {isMobileScreen ? (
          <div className="menu">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuRoundedIcon
                id="menu-icon" 
                sx={{fontSize:70}}
              />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}            
            > 
              <a href="#about-section"><MenuItem onClick={handleClose}>About</MenuItem></a>
              <a href="#experience-section"><MenuItem onClick={handleClose}>Experience</MenuItem></a>
              <a href="#services-section"><MenuItem onClick={handleClose}>Services</MenuItem></a>
              <a href="#contact-section"><MenuItem onClick={handleClose}>Contact</MenuItem></a>
              
            </Menu>
          </div>
        ) : (
          <div className="navbar">
            <a href="#about-section"><Typography variant="h6" className="nav-selections" >About</Typography></a>
            <a href="#experience-section"><Typography variant="h6" className="nav-selections">Experience</Typography></a>
            <a href="#services-section"><Typography variant="h6" className="nav-selections">Services</Typography></a>
            <a href="#contact-section"><Typography variant="h6" className="nav-selections">Contact</Typography></a>
          </div>
        )}
      </Box>
    </>
  )
}


