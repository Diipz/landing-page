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


export default function App() {

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
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MainContent />
      {isTabletScreen ? (
        <>
          <EmailBanner />
          <LogoBanner />
        </>
      ) : null}
      <Footer />
    </ThemeProvider>
  )
}

