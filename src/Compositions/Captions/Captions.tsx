import React, { useMemo } from 'react';
import { Sequence } from 'remotion';
import { formatCaptions } from '../../services/captions';

interface CaptionObj {
  id: number;
  timestamps: [string, string];
  framestamps: [number, number];
  content: string;
}

const Captions: React.FC<{
  transcribedObj: object;
  fps: number;
  customStyles?: object;
}> = ({ transcribedObj, fps, customStyles }) => {
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
          <div className="caption-container">
            <p style={customStyles || { color: 'red', fontSize: '32px' }}>
              {caption.content}
            </p>
          </div>
        </Sequence>
      );
    });
  }, [allCaptions]);

  return (
    <>{captionSequences?.map((captionSequence: React.FC) => captionSequence)}</>
  );
};

export default Captions;
