import React, { useMemo, useState } from 'react';
import { useCurrentFrame, useVideoConfig, Audio, Sequence } from 'remotion';
import { useAudioData, visualizeAudio } from '@remotion/media-utils';
import { formatCaptions } from '../services/captions';

import spidermanAudio from '../assets/spidermanAudio.mp3';
import spidermanText from '../assets/spidermanTranscribed.json';

const Transcribed: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const captions = useMemo(
    () => formatCaptions(spidermanText, fps),
    [spidermanText]
  );

  const AllComponents = useMemo(() => {
    return captions?.map(caption => {
      console.log('Actually creating components... ');
      return (
        <Sequence
          from={caption.framestamps[0]}
          durationInFrames={caption.framestamps[1] - caption.framestamps[0]}
        >
          <p style={{ color: 'red', fontSize: '32px' }}>{caption.content}</p>
        </Sequence>
      );
    });
  }, [captions]);

  console.log('AllComponents-----', AllComponents);

  return (
    <>
      <Audio
        src={spidermanAudio}
        // startFrom={30 * 10}
      />
      <p>FPS is: {fps}</p>
      <p
        style={{
          fontSize: '64px',
        }}
      >
        Current Frame #: {frame}
      </p>
      {AllComponents.map(x => (
        <>{x}</>
      ))}
    </>
  );
};

export default Transcribed;
