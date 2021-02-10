import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

export default class Player extends Component {
  render() {
    const { open, toggleModal } = this.props;
    const styles = {
      modal: {
        maxWidth: "unset",
        width: "100%",
        padding: "unset",
      },
      overlay: {
        background: "rgba(0, 0, 0, 0.5)",
      },
      closeButton: {
        background: "yellow",
      },
    };
    return (
      <Modal open={open} onClose={toggleModal} styles={styles} center>
        <ReactPlayer
          url="https://vimeo.com/347119375"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>
    );
  }
}
