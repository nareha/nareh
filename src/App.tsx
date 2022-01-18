import React, { useState } from 'react';
import './styles/global.css';
import Command from './components/Command';

/* Art for display, to be added later */
var ascii = [
  "                                888",
  "                                888",
  "                                888",
  ".d8888b   8888b.  88888b.d88b. 88888b.  888  .d88b.",
  "88K          \"88b 888 \"888 \"88b 888 \"88b 888 d8P  Y8b",
  "\"Y8888b. .d888888 888  888  888 888  888 888 88888888",
  "    X88 888  888 888  888  888 888 d88P 888 Y8b.   ",
  "  88888P' \"Y888888 888  888  888 88888P\"  888  \"Y8888  ",
  "                                888                   ",
  "                                888                   ",
  "                                888                   ",
].join('\n');

function App() {
  /* Elementary testing of command input */
  const [inputValue, setInputValue] = useState<string>("");
  const [boxValue, setBoxValue] = useState<string>("");
  const [renderComponent, setRenderComponent] = useState<boolean>(false);
  const inputHandler = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setInputValue(boxValue);
      setRenderComponent(true);
    }
  }

  return (
    <div className="App">
      <div className="terminal-container">
        <p>
          guest@nareh.io:~$ neofetch
        </p>
        <pre>
          <code>
            {ascii}
          </code>
        </pre>
        <input
          type="text"
          value={boxValue}
          onKeyDown={inputHandler}
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setBoxValue(ev.target.value)}
        />
        {renderComponent && <Command commandInput={inputValue} />}
      </div>
    </div>
  );
}

export default App;
