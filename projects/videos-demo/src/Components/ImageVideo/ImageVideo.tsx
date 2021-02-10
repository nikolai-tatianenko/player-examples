import React, { useState } from "react";

const ImageVideo = () => {
  const [state, setState] = useState({});
  const {
    url,
    playing,
    controls,
    light,
    volume,
    muted,
    loop,
    played,
    loaded,
    duration,
    playbackRate,
    pip,
  } = state;
  const playVideos = {
    0: false,
    1: false,
  };
  const handlePlay = () => {
    console.log("onPlay");
    setState({ playing: true });
  };

  const handlePause = () => {
    console.log("onPlay");
    setState({ playing: true });
  };

  const handleEnded = () => {
    console.log("onEnded");
    setState({ playing: state.loop });
  };
  const handleProgress = (state) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!state.seeking) {
      setState(state);
    }
  };

  const handleDuration = (duration) => {
    console.log("onDuration", duration);
    setState({ duration });
  };

  const handlePlayPause = () => {
    setState({ playing: !state.playing });
    // handlePlayPause
  };

  const handleStop = () => {
    setState({
      url: null,
      playing: false,
    });
  };
  /**
   * <button onClick={handleStop}>Stop</button>
   <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
   */

  return (
    <div>
      <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
      {playing && (
        <ReactPlayer
          url="https://vimeo.com/347119375"
          className="react-player"
          light="false"
          playing={playing}
          controls
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPlay={handlePlay}
          onPause={handlePause}
          onBuffer={() => console.log("onBuffer")}
          onSeek={(e) => console.log("onSeek", e)}
          onEnded={handleEnded}
          onError={(e) => console.log("onError", e)}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      )}
    </div>
  );
};
export default ImageVideo;
