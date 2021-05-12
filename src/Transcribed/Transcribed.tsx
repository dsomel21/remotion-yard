import React from 'react';
import { useCurrentFrame, useVideoConfig, Audio } from 'remotion';
import { useAudioData, visualizeAudio } from '@remotion/media-utils';

import spidermanAudio from '../assets/spidermanAudio.mp3';
// import spidermanText from '../assets/spidermanTranscribed.mp3';

const Transcribed: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <>
      <Audio src={spidermanAudio} startFrom={30 * 10} />
      <p>FPS is: {fps}</p>
      <p
        style={{
          fontSize: '64px',
        }}
      >
        Current Frame #: {frame}
      </p>
    </>
  );
};

export default Transcribed;
