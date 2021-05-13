import * as React from 'react';
import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';

import Spiderman from './Compositions/Spiderman';
import Alexander from './Compositions/Alexander';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="Spiderman"
        component={Spiderman}
        durationInFrames={30 * 300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Alexander"
        component={Alexander}
        durationInFrames={30 * 300}
        fps={30}
        width={1280}
        height={720}
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
