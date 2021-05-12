import * as React from 'react';
import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';

import Transcribed from './Transcribed';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="SpidermanAudio"
        component={Transcribed}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* 
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/> */}
    </>
  );
};
