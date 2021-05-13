import React from 'react';
import { useVideoConfig, Video } from 'remotion';
import Captions from '../Captions';
import alexanderVideo from '../../assets/rsClip.mp4';
import alexanderText from '../../assets/rsTranscribed.json';

const baseCampStyles = {
  fontFamily: 'Graphik Bold',
  color: '#1D2D35',
  fontSize: '63px',
  textShadow:
    '-3px -3px 0 #FFF, 3px -3px 0 #FFF, -3px 3px 0 #FFF, 3px 3px 0 #FFF',
  textTransform: 'lowercase',
};

const Alexander: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Video src={alexanderVideo} />
      <Captions
        transcribedObj={alexanderText}
        fps={fps}
        customStyles={baseCampStyles}
      />
    </>
  );
};

export default Alexander;
