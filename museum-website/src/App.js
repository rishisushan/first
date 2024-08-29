import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Exhibitions from "./pages/exhibitions";
import Tickets from "./pages/tickets";
import Visit from "./pages/visit";
import Contact from "./pages/contact";
import Chatbot from "./components/chatbot";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  // Define the content to be passed as props
  const aboutContent = "Information about our science center.";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About content={aboutContent} />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Chatbot />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
