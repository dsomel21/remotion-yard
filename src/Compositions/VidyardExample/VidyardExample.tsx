import React from 'react';
import { Video, useVideoConfig } from 'remotion';
import Captions from '../Captions';

import vidyardVid from '../../assets/vidyardPowerVid.mp4';
import vidyardText from '../../assets/vidyardPowerTranscribed.json';

const vidyardStyles = {
  fontFamily: 'Lineto Circular Medium', // Vidyard Font
  color: '#475066', // Dark Blue
  fontSize: '63px',
  background: '#DDE1F0',
  textShadow:
    '-1px -1px 0 ##DDE1F0, 1px -1px 0 ##DDE1F0, -1px 1px 0 ##DDE1F0, 1px 1px 0 ##DDE1F0',
  textTransform: 'lowercase',
};

const VidyardExample: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Video src={vidyardVid} />
      <Captions
        transcribedObj={vidyardText}
        fps={fps}
        customStyles={vidyardStyles}
      />
    </>
  );
};

export default VidyardExample;
