import React from "react";
import ReactDOM from "react-dom";
import ModalPlayer from "./ModalPlayer";
import "./styles.css";

const App = () => {
  return (
    <div>
      <ModalPlayer
        key={"left"}
        thumbnailType={"https://picsum.photos/200/300"}
        url={"https://vimeo.com/347119375"}
      />
      <hr />
      <ModalPlayer
        key={"right"}
        thumbnailType={"https://picsum.photos/200/301"}
        url={"https://vimeo.com/347119375"}
      />
      <hr />
      <ModalPlayer
        key={"right"}
        thumbnailType={false}
        url={"https://vimeo.com/347119375"}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

document
  .querySelectorAll(".react-play-video")
  .forEach((element) => console.log(element));
