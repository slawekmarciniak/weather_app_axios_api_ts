import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppProvider from "./AppContext/AppContext";
import Nav from "./components/Nav";
import { AccuWeather, Home, OpenWeather, Weatherbit } from "./components/Pages";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/openweather">
              <OpenWeather />
            </Route>
            <Route exact path="/accuweather">
              <AccuWeather />
            </Route>
            <Route exact path="/weatherbit">
              <Weatherbit />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
