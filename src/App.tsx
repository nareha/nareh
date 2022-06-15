import React, {useState} from 'react';
import './styles/global.css';
import Command from './components/Command';

// For command history
let historyLocation = -1;

// For displayed all issued commands and outputs
const history = [
  <Command commandInput="banner" />
];

function App() {
  const [boxValue, setBoxValue] = useState<string>("");
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
      history.push(
          <div>
            <span style={{ color:"#DCA561" }}>guest</span>@<span style={{ color:"#7E9CD8" }}>nareha.xyz</span>:~$ <span className="text-field">{boxValue}</span>
          </div>)
      history.push(<Command commandInput={boxValue} />)
      let fullHistory = commandHistory.concat([boxValue]);
      setCommandHistory(fullHistory);
      setBoxValue("");
    }
  }

  return (
    <div className="App">
      <div className="terminal-container">
        <div>
          {history.map(history => <div>{history}</div>)}
        </div>
        <div>
          <span style={{ color:"#DCA561" }}>guest</span>@<span style={{ color:"#7E9CD8" }}>nareha.xyz</span>:~$ {" "}
          <input
              className="text-field"
              type="text"
              value={boxValue}
              onKeyDown={inputHandler}
              onChange={(
                  ev: React.ChangeEvent<HTMLInputElement>,
              ): void => setBoxValue(ev.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
