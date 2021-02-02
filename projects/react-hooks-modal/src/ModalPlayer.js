import React, { useState } from "react";
import ReactPlayer from "react-player";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ModalButton = ({ thumbnailType, url, toggleModal }) => {
  if (typeof thumbnailType === "string") {
    return <img src={thumbnailType} onClick={toggleModal} />;
  } else {
    return <button onClick={toggleModal}>Play Video </button>;
  }
};

const Player = ({ url, thumbnailType = false }) => {
  const [open, setOpen] = useState(false);
  console.log("state", open);
  const toggleModal = () => setOpen(!open);

  return (
    <>
      <ModalButton
        thumbnailType={thumbnailType}
        toggleModal={toggleModal}
        url={url}
      />
      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "100%",
            padding: "unset"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "red",
            color: "white"
          }
        }}
        center
      >
        <ReactPlayer
          key={"modalPlayer"}
          controls={true}
          playing={true}
          url={url}
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>
    </>
  );
};

export default Player;
