import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../../playerContext';

/**
 * SimplePlayer component.
 * @param {Object} props - The component props.
 * @returns {JSX.Element | null} - The rendered component.
 */
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

  useEffect(() => {
    setState({
      url: url,
      playing: playing,
      light: light,
      controls: controls,
      pip: pip,
    });

    setContext([
      ...context,
      {
        url: url,
        playing: playing,
      },
    ]);

    console.log('CONTEXT VALUE', context, {
      url: url,
      playing: playing,
    });
  }, [url]);

  function setPlaying(url, context, setContext) {
    for (let value of context) {
      if (value.url === url) {
        value.playing = true;
      } else {
        value.playing = false;
      }
    }
    console.log('value!!', context);
  }

  const handlePlay = () => {
    setPlaying(url, context, setContext);
    console.log('onPlay', context);
    setState({ playing: true });
  };

  const handlePause = () => {
    console.log('onPause');
    setState({ playing: false });
  };

  const handleEnded = () => {
    console.log('onEnded');
    setState({ playing: state.loop });
  };

  const handleProgress = (state) => {
    if (!state.seeking) {
      setState(state);
    }
  };

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setState({ duration });
  };

  const handlePlayPause = () => {
    setState({ playing: !state.playing });
  };

  const handleStop = () => {
    setState({
      url: null,
      playing: false,
    });
  };

  if (!showPlayer || !url) {
    return null;
  }

  return (
    <>
      <ReactPlayer
        url={url}
        className="react-player"
        playing={state.playing}
        controls={state.controls}
        light={state.light}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onPause={handlePause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={(e) => console.log('onSeek', e)}
        onEnded={handleEnded}
        onError={(e) => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
    </>
  );
};
export default SimplePlayer;
