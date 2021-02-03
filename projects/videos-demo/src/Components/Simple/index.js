import "../../styles.css";
import React, { useState, useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import PlayerContext from "../../playerContext";
const SimplePlayer = ({
  url,
  showPlayer = true,
  playing = false,
  light = false,
  controls = true,
  volume,
  muted = false,
  loop = false,
  played = false,
  loaded,
  duration,
  playbackRate,
  pip = false,
  ...otherProps
}) => {
  const [state, setState] = useState({});
  const [context, setContext] = useContext(PlayerContext);

  /*const {
    //url,
    //playing = true,
    //controls = true,
    //light,
    
  } = state;*/
  useEffect(() => {
    setState({
      url: url,
      playing: playing,
      light: light,
      controls: controls,
      pip: pip,
    });
    //value[url] = playing;

    setContext([...context, { url: url, playing: playing }]);
    //context[url] = { url: url, playing: playing };
    //    setContext(context);
    console.log("CONTEXT VALUE", context, { url: url, playing: playing });
  }, [url]);

  //useEffect(() => {}, context);
  function setPlaying(url, context, setContext) {
    for (let value of context) {
      if (value.url == url) {
        value.playing = true;
      } else {
        value.playing = false;
      }
    }
    console.log("value!!", context);
  }
  const handlePlay = () => {
    //context[url].playing = true;
    setPlaying(url, context, setContext);
    console.log("onPlay", context);
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
    //console.log("onProgress", state);
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
    setState({ url: null, playing: false });
  };
  /**
   * <button onClick={handleStop}>Stop</button>
      <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
   */
  //if (!showPlayer) {
  //    return null;
  //  }
  if (!url) {
    return <h1>no videos</h1>;
  }
  return (
    <>
      <ReactPlayer
        url={url}
        className="react-player"
        playing={state.playing}
        controls={state.controls}
        light={state.light}
        //      config={{ vimeo: { playerOptions: { portrait: false } } }}
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
    </>
  );
};

export default SimplePlayer;
