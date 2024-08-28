import React from "react";
import {
  BrowserRouter as Router,
  Routes as Route,
  //Route,
  Switch,
} from "react-router-dom";
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
//import MyRoutes from "./Routes";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/exhibitions" component={Exhibitions} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/visit" component={Visit} />
          <Route path="/contact" component={Contact} />
        </switch>
        <Chatbot />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
