import * as React from 'react';
import { Composition } from 'remotion';

import Spiderman from './Compositions/Spiderman';
import Alexander from './Compositions/Alexander';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      {/* Spiderman (2002) - "I missed the part where that's my problem." */}
      <Composition
        id="Spiderman"
        component={Spiderman}
        durationInFrames={30 * 300}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Ryan Singer - https://vimeo.com/491222729 */}
      <Composition
        id="Alexander"
        component={Alexander}
        durationInFrames={30 * 300}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
