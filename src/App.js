import Navbar from "./components/layout/navbar/Navbar";
import ScrollTop from "./components/layout/scrollTop/ScrollTop";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Footer from "./components/sections/footer/Footer";
import Contact from "./components/sections/contact/Contact";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Cairo", "sans-serif"].join(","),
      h2: {
        fontFamily: ["Cairo", "sans-serif"].join(","),
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
        <Contact />
        <Footer />
        <ScrollTop showBelow={250} />
      </ThemeProvider>
    </>
  );
}

export default App;
