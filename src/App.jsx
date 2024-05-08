import "./App.css"
import Header from "./assets/components/Header"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {

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
      }
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default App
