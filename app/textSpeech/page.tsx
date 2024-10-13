'use client'

import React from "react";
import { useTextToVoice } from "react-speakup";

const TextToVoiceComponent = () => {
  const { speak, pause, resume, ref, setVoice, voices } = useTextToVoice<HTMLDivElement>();

  return (
    <div>
      <button onClick={speak}>Speak</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <select
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setVoice(event.target.value)
        }
      >
        {voices.map((voice) => (
          <option key={voice}>{voice}</option>
        ))}
      </select>
      <div ref={ref}>
        <h1>
          It&apos;s not important which HTML tag your text is within&rsquo;
        </h1>
        <div>
          Or <p>how many levels it is nested&rsquo;</p>
        </div>
      </div>
    </div>
  );
};

export default TextToVoiceComponent;