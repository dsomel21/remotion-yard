import React from 'react';
import { useCurrentFrame, useVideoConfig, Video, Sequence } from 'remotion';
import Captions from '../Captions';
import spidermanVideo from '../../assets/spidermanVideo.mp4';
import spidermanText from '../../assets/spidermanTranscribed.json';

const spidermanStyles = {
  fontFamily: 'Arial',
  fontStyle: 'italic',
  color: '#ffeaa7',
  fontWeight: 800,
  fontSize: '63px',
  textShadow:
    '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  textTransform: 'lowercase',
};

const Spiderman: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Video src={spidermanVideo} />
      <Captions
        transcribedObj={spidermanText}
        fps={fps}
        customStyles={spidermanStyles}
      />
    </>
  );
};

export default Spiderman;
