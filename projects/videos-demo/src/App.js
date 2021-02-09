import './styles.css';
import React, { useState } from 'react';
import {
  CarouselVideo,
  ImageVideo,
  Modal,
  Simple,
} from './Components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerContext from './playerContext';
import cmsSettings from './cmsSettings';
import { Menu } from './Menu';

console.log("cms settings", cmsSettings);
const UrlsMap = [
  {
    url: "/",
    name: "Home",
    component: Simple,
  },
];

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
            <Route path="/gcad">
              <Simple />
            </Route>
            <Route path={UrlsMap[1].url} component={UrlsMap[1].component} />
            <Route exact path="/">
              <button onClick={() => setShowPlaye(!showPlayer)}>cilck</button>
              <h2> With default thumbnail</h2>
              <Simple
                url={"https://vimeo.com/347119375"}
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
