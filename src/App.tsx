import React, {useState} from 'react';
import './styles/global.css';
import Command from './components/Command';

let historyLocation = -1;

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
      history.push(<div className="prompt">
        guest@nareha.xyz:~$ {boxValue}
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
        <div className="prompt">
          {"guest@nareha.xyz:~$ "}
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
