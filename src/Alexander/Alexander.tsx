import React from 'react';
import { useCurrentFrame, useVideoConfig, Video, Sequence } from 'remotion';
import Captions from '../Captions';
import alexanderVideo from '../assets/rsClip.mp4';
import alexanderText from '../assets/rsTranscribed.json';

const Alexander: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <>
      <Video src={alexanderVideo} startFrom={60} />
      <Captions transcribedObj={alexanderText} fps={fps} />
    </>
  );
};

export default Alexander;
