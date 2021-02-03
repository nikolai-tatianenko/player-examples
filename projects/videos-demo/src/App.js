import "./styles.css";
import React, { useState, useContext } from "react";
import {
  Simple,
  Modal,
  DefaultDemo,
  Corp,
  CarouselVideo,
  ImageVideo,
} from "./Components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlayerContext from "./playerContext";
import cmsSettings from "./cmsSettings";
console.log("cms settings", cmsSettings);
const UrlsMap = [
  {
    url: "/",
    name: "Home",
    component: Simple,
  },
  {
    url: "/corp",
    name: "Corp",
    component: Corp,
  },
];
const Menu = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/modal">modal</Link>
        </li>
        <li>
          <Link to="/custom-controls">With Custom Controls</Link>
        </li>
        <li>
          <Link to="/videos">2 videos</Link>
        </li>
        <li>
          <Link to="/default-demo">Default Demo</Link>
        </li>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
      </ul>
    </nav>
  );
};

export default function App() {
  const [showPlayer, setShowPlaye] = useState(true);
  const [context, setContext] = useState([]);
  return (
    <div className="App">
      <PlayerContext.Provider value={[context, setContext]}>
        <Router>
          <Menu />
          <Switch>
            <Route path="/carousel">
              <h1>CarouselImage</h1>
              <CarouselVideo />
            </Route>
            <Route path="/image">
              <h1>Image</h1>
              <ImageVideo />
            </Route>
            <Route path="/modal">
              <Modal />
            </Route>
            <Route path="/default-demo">
              <DefaultDemo />
            </Route>
            <Route path="/gcad">
              <Simple />
            </Route>
            <Route path={UrlsMap[1].url} component={UrlsMap[1].component} />
            <Route exact path="/">
              <button onClick={() => setShowPlaye(!showPlayer)}>cilck</button>
              <h2> With default thumbnail</h2>
              <Simple
                url={"https://vimeo.com/162427937"}
                showPlayer={showPlayer}
                light={true}
              />
              <h1> With custom thumbnail</h1>
              <Simple
                url={"https://www.youtube.com/watch?v=r3EiqUCV5EI"}
                showPlayer={showPlayer}
              />
            </Route>
          </Switch>
        </Router>
      </PlayerContext.Provider>
    </div>
  );
}
