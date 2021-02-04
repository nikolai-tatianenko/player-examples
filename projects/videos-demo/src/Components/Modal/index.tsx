import React, { useState } from "react";
import Player from "./reactPlayer";
import "./styles.css";
const ModalPlayer = (props) => {
  const [state, setState] = useState({ open: false });

  const onOpenModal = () => {
    setState((prevState) => ({
      open: !prevState.open,
    }));
  };
  return (
    <>
      <button onClick={onOpenModal}>Open Modal with Video </button>
      <Player open={state.open} toggleModal={onOpenModal} />
    </>
  );
};
export default ModalPlayer;
