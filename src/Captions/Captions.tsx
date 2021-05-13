import React, { useMemo } from 'react';
import { Sequence } from 'remotion';
import { formatCaptions } from '../services/captions';

import spidermanAudio from '../assets/spidermanAudio.mp3';
import spidermanVideo from '../assets/spidermanVideo.mp4';
import spidermanText from '../assets/spidermanTranscribed.json';

interface CaptionObj {
  id: number;
  timestamps: [string, string];
  framestamps: [number, number];
  content: string;
}

const Captions: React.FC<{
  transcribedObj: object;
  fps: number;
  style?: object;
}> = ({ transcribedObj, fps }) => {
  /*
   *  formatCaptions() could be expensive
   */
  const allCaptions = useMemo(
    () => formatCaptions(transcribedObj, fps),
    [transcribedObj]
  );

  /*
   * Pregenerate all the captions based on the formatted transcript file
   */
  const captionSequences = useMemo(() => {
    return allCaptions?.map((caption: CaptionObj) => {
      console.log('Actually creating components... ');
      return (
        <Sequence
          key={caption.id}
          from={caption.framestamps[0]}
          durationInFrames={caption.framestamps[1] - caption.framestamps[0]}
        >
          <p style={{ color: 'red', fontSize: '32px' }}>{caption.content}</p>
        </Sequence>
      );
    });
  }, [allCaptions]);

  console.log('==================================');
  console.log(captionSequences);
  console.log('==================================');

  return (
    <>{captionSequences?.map((captionSequence: React.FC) => captionSequence)}</>
  );
};

export default Captions;
