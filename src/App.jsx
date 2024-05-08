import "./App.css"
import createTheme from "@mui/material/styles";
import Header from "./assets/components/Header"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@emotion/react";

function App() {

  const theme = createTheme({
    palette: {
      background: {
        paper: "#0a192f",
        default: "#0a192f"
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
