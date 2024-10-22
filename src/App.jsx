import "./App.css"
import Header from "./assets/components/Header"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import EmailBanner from "./assets/components/EmailBanner";
import LogoBanner from "./assets/components/LogoBanner";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainContent from "./assets/components/MainContent";
import Footer from "./assets/components/Footer";
import Loader from "./assets/components/Loader";
import { useState, useEffect } from 'react';
import SocialsFooter from "./assets/components/SocialsFooter";



export default function App() {

  const [loading, setLoading] = useState(true);
  const [fadeInHeader, setFadeInHeader] = useState(false);
  const [fadeInContent, setFadeInContent] = useState(false);
  const [fadeInSidebar, setFadeInSidebar] = useState(false);

  const isTabletScreen = useMediaQuery(`(min-width:801px) and (min-height:900px)`);

  const theme = createTheme({
    palette: {
      background: {
        paper: "#0a192f",
        default: "#0a192f"
      }
    },
    typography: {
      fontFamily: [
        'SF Mono',
        'Fira Code',
        'Fira Mono',
        'Roboto Mono',
      ].join(","),
      h6: {
        letterSpacing: "0.02em",
        fontSize: "1.5rem"
      }
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (!loading) {
      const headerTimer = setTimeout(() => {
        setFadeInHeader(true);
      }, 500); 

      const contentTimer = setTimeout(() => {
        setFadeInContent(true);
      }, 1500); 

      const sidebarTimer = setTimeout(() => {
        setFadeInSidebar(true);
      }, 2500); 

      return () => {
        clearTimeout(headerTimer);
        clearTimeout(contentTimer);
        clearTimeout(sidebarTimer);
      };
    }
  }, [loading]);


  if (loading) {
    return (
      <ThemeProvider theme={theme}>
      <div className="loader-container">
        <Loader />
      </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header className={fadeInHeader ? 'fade-in-header' : 'hidden-main'} />
      <MainContent className={fadeInContent ? 'fade-in' : 'hidden-main'} />
      {isTabletScreen ? (
        <>
          <EmailBanner className={fadeInSidebar ? 'fade-in' : 'hidden-main'} />
          <LogoBanner className={fadeInSidebar ? 'fade-in' : 'hidden-main'} />
        </>
      ) : <SocialsFooter />}
      <Footer />
    </ThemeProvider>
  )
}

