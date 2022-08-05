import Navbar from "./components/layout/navbar/Navbar";
import ScrollTop from "./components/layout/scrollTop/ScrollTop";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Footer from "./components/sections/footer/Footer";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Exo 2', 'sans-serif'].join(","),
    },
    palette: {
      primary: {
        main: "#06aed5",
      },
      secondary: {
        main: "#6e5494",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
        <ScrollTop showBelow={250} />
      </ThemeProvider>
    </>
  );
}

export default App;
