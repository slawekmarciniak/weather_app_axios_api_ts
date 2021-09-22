import { AccuWeather, Home, OpenWeather, Weatherbit } from "./components/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
