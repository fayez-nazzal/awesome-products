import "./styles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AppRoute from "./AppRoute";
import ContactRoute from "./Contact";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import useGoogleAnalytics from "./useGoogleAnalytics";

export default function App() {
  useGoogleAnalytics();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/app">
              <AppRoute />
            </Route>
            <Route path="/contact">
              <ContactRoute />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#e74235"
    }
  }
});
