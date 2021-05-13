import React from 'react';
import { useCurrentFrame, useVideoConfig, Video, Sequence } from 'remotion';
import Captions from '../Captions';
import spidermanVideo from '../../assets/spidermanVideo.mp4';
import spidermanText from '../../assets/spidermanTranscribed.json';

const Spiderman: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Video src={spidermanVideo} />
      <Captions transcribedObj={spidermanText} fps={fps} />
    </>
  );
};

export default Spiderman;
