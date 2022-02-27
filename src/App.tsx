import React, {useState} from 'react';
import './styles/global.css';
import Command from './components/Command';

/* Art for display, to be added later
const ascii = [
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
*/

let historyLocation = -1;

function App() {
  /* Elementary testing of command input */
  const [inputValue, setInputValue] = useState<string>("");
  const [boxValue, setBoxValue] = useState<string>("");
  const [renderComponent, setRenderComponent] = useState<boolean>(false);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const inputHandler = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (historyLocation === -1) {
        return;
      } else {
        if (historyLocation === commandHistory.length) {
          historyLocation--;
        }
        setBoxValue(commandHistory[historyLocation]);
        if (historyLocation !== 0) {
          historyLocation--;
        }
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (commandHistory.length - 1 === historyLocation) {
        historyLocation++;
        setBoxValue("");
      } else if (historyLocation === commandHistory.length) {
        return;
      } else {
        historyLocation++;
        setBoxValue(commandHistory[historyLocation]);
      }
    } else if (event.key === 'Enter') {
      historyLocation = commandHistory.length;
      setInputValue(boxValue);
      setRenderComponent(true);
      let fullHistory = commandHistory.concat([boxValue]);
      setCommandHistory(fullHistory);
      setBoxValue("");
    }
  }

  return (
    <div className="App">
      <div className="terminal-container">
        <p>
          $ introtext <br /> Welcome! The next line will begin the input field
        </p>
        {/*<pre>*/}
        {/*  <code>*/}
        {/*    {ascii}*/}
        {/*  </code>*/}
        {/*</pre>*/}
        <pre>
          {"$ "}
          <input
              className="text-field"
              type="text"
              value={boxValue}
              onKeyDown={inputHandler}
              onChange={(
                  ev: React.ChangeEvent<HTMLInputElement>,
              ): void => setBoxValue(ev.target.value)}
          />
        </pre>
        {renderComponent && <Command commandInput={inputValue} />}
      </div>
    </div>
  );
}

export default App;
