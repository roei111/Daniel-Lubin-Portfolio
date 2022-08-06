import Navbar from "./components/layout/navbar/Navbar";
import ScrollTop from "./components/layout/scrollTop/ScrollTop";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Footer from "./components/sections/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import RouterScrollToTop from "./components/utils/RouterScrollToTop";

function App() {
  const theme = createTheme({
    palette:{
      primary: {
        main: "#FFF"
      }
    },
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
        <BrowserRouter>
          <Navbar />
          <RouterScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        <CssBaseline />
        <Footer />
        <ScrollTop showBelow={250} />
      </ThemeProvider>
    </>
  );
}

export default App;
