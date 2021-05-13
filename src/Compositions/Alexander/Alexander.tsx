import React from 'react';
import { useVideoConfig, Video } from 'remotion';
import Captions from '../Captions';
import alexanderVideo from '../../assets/rsClip.mp4';
import alexanderText from '../../assets/rsTranscribed.json';

const Alexander: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Video src={alexanderVideo} />
      <Captions transcribedObj={alexanderText} fps={fps} />
    </>
  );
};

export default Alexander;
