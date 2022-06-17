import React, { useRef, useEffect, useState } from 'react';
import './global.css';
import Command from './components/Command';

// For command history
let historyLocation = -1;

// For displayed all issued commands and outputs
const history = [
  <Command commandInput="banner" />
];

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const Commands = ({ cmds }) => (
    <div>
      {history.map(history => <div>{history}</div>)}
      <AlwaysScrollToBottom />
    </div>
);

function App() {
  const [boxValue, setBoxValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);

  const inputHandler = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (historyLocation !== -1) {
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
      } else if (historyLocation !== commandHistory.length) {
        historyLocation++;
        setBoxValue(commandHistory[historyLocation]);
      }
    } else if (event.key === 'Enter') {
      historyLocation = commandHistory.length;
      history.push(
          <div>
            <span style={{ color:"#DCA561" }}>guest</span>@<span style={{ color:"#7E9CD8" }}>nareh.dev</span>:~$ {" "} <span className="text-field">{boxValue}</span>
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
          <Commands cmds={history} />
          <div>
            <span style={{ color:"#DCA561" }}>guest</span>@<span style={{ color:"#7E9CD8" }}>nareh.dev</span>:~$ {" "}
            <input
                autoFocus
                className="text-field"
                type="text"
                value={boxValue}
                onKeyDown={inputHandler}
                onChange={event => {
                  setBoxValue(event.target.value)
                }}
            />
          </div>
        </div>
      </div>
  );
}

export default App;
