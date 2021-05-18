<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dsomel21/remotion-yard">
    <img src="https://i.imgur.com/utoAjoK.png" alt="Logo" height="150">
  </a>

  <h3 align="center">Remotion Yard</h3>

  <p align="center">
    Create videos with captions using Remotion, AWS Transcribe and upload it to Vidyard immediately! 
    <br />
    <a href="https://github.com/dsomel21/remotion-yard/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://share.vidyard.com/watch/hYqAHo34ii821EspUXrSbA?">2 Minute Demo</a>
    ·
    <a href="https://github.com/dsomel21/remotion-yard/issues">Report Bug</a>
    ·
    <a href="https://github.com/dsomel21/remotion-yard/pull-requests">Pull Request</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#rendering-and-uploading">Rendering and Uploading</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

With this repo, you can quickly build video compositions using React Components and have them accurately captioned as well. Once you are satisfied, you can render and upload it to [Vidyard](https://vidyard.com/) as well! 

### Built With

* [NodeJS](https://nodejs.org/en/)
* [ReactJS](https://github.com/facebook/react)
* [Remotion](https://github.com/JonnyBurger/remotion)


<!-- GETTING STARTED -->
## Getting Started

To start building your auto-captioned comp, follow these simple steps.

### Prerequisites

* [NodeJS](https://nodejs.org/en/)

Install a stable version on Node JS

* FFMPEG

The only dependency that Remotion depends on is NodeJS and FFMPEG. You can view the installation for FFMPEG [here](https://www.remotion.dev/docs/)

* [AWS Account](https://aws.amazon.com/)

**The captions can only be generated with [Amazon Transcribe](https://aws.amazon.com/transcribe/)**. You can get 60 minutes free every month with the free tier. You must upload the `.mp4` file to S3 and then create a Transcribe Job. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dsomel21/remotion-yard.git && cd remotion-yard
   ```
2. Install the packages
   ```sh
   yarn install
   ```

3. Run the preview in the browser
    ```sh
    yarn start
    ```

<!-- USAGE EXAMPLES -->
## Usage

Once your project is up and running, we can go ahead and start building a composition.

Think of compositions as components... for videos. 

Once you have a **MP4 video** that you want to auto-caption, download the `asrOutput.json` from the **AWS Transcribe** tool (you can rename it if you like).


```jsx
import React from 'react';
import { Video, useVideoConfig } from 'remotion';
import Captions from '../Captions';

// Import your assets files
import remotionVid from '../../assets/remotionYard.mp4';
import remotionText from '../../assets/remotionTranscribed.json';

// Optional styles
const styles = { fontFamily: 'Graphik Bold', color: '#FB3640' };

const RemotionTrailer: React.FC = () => {
  const { fps } = useVideoConfig(); // This will be set in src/Video.tsx

  return (
    <>
      <Video src={remotionVid} />
      <Captions transcribedObj={remotionText} fps={fps} customStyles={styles} />
    </>
  );
};

export default RemotionTrailer;
```

And then don't forget to add this composition to the main `Video` component.

```jsx
    <Composition
      id="RemotionTrailer_Final" 
      component={RemotionTrailer}
      fps={30} // 30 frames per second
      durationInFrames={30 * 153} // 1 second * 153 
      width={1920}
      height={1080}
    />
```

Then preview it in the browser:


<img src="https://i.imgur.com/cyBKfBH.png" alt="Component Preview in Browser" height="400"/>


_For more information on remotion features, please refer to their [Documentation](https://www.remotion.dev/docs/)_

## Rendering and Uploading

Render:
   ```sh
   yarn run render --comp=RemotionTrailer_Final
   ```

Upload directly to [Vidyard](https://www.vidyard.com/):
   ```sh
   yarn run upload
   ```

Note: This assumes you have a Vidyard account and have setup the `.env` with `VIDYARD_EMAIL` and `VIDYARD_PASSWORD`



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. 😇

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Twitter - [@dilrajio](https://twitter.com/dilrajio)

Project Link: [https://github.com/dsomel21/remotion-yard](https://github.com/dsomel21/remotion-yard)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [JonnyBurger (Creator of Remotion)](https://github.com/JonnyBurger/remotion) as well as the Discord commmunity. 
* [FelippeChemello](https://github.com/FelippeChemello/podcast-maker/) for their brilliant code 
* [TinyNova](https://github.com/TinyNova/aws-transcription-to-srt/blob/master/index.js) (Refactored/mixed their code for parsing the AWS output JSON)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dsomel21/remotion-yard.svg?style=for-the-badge
[contributors-url]: https://github.com/dsomel21/remotion-yard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dsomel21/remotion-yard.svg?style=for-the-badge
[forks-url]: https://github.com/dsomel21/remotion-yard/network/members
[stars-shield]: https://img.shields.io/github/stars/dsomel21/remotion-yard.svg?style=for-the-badge
[stars-url]: https://github.com/dsomel21/remotion-yard/stargazers
[issues-shield]: https://img.shields.io/github/issues/dsomel21/remotion-yard.svg?style=for-the-badge
[issues-url]: https://github.com/dsomel21/remotion-yard/issues
[license-shield]: https://img.shields.io/github/license/dsomel21/remotion-yard.svg?style=for-the-badge
[license-url]: https://github.com/dsomel21/remotion-yard/blob/master/LICENSE.txt
