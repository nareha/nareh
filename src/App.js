import React, { useRef, useEffect, useState } from 'react';
import './global.css';
import Command from './components/Command';

// For command history (up/down arrows)
let historyLocation = -1;

/*
 * For displayed all issued commands and outputs
 * Not `const` to allow for resetting on a "clear" command
 */
let history = [
  <Command commandInput="banner" />
];

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
      if (boxValue === "clear") {
        history = [];
      }
      setCommandHistory(fullHistory);
      setBoxValue("");
    }
  }

  /*
   * References for two purposes:
   * - Always scroll to the bottom of the overflowed screen when commands are issued
   * - Always focus on text input
   */
  const inputRef = useRef();
  const inputFocus = () => {
    inputRef.current.focus();
  };
  useEffect(() => inputRef.current.scrollIntoView());

  return (
      <div className="App" onClick={inputFocus}>
        <div className="terminal-container">
          {history.map(history => <div>{history}</div>)}
          <span style={{ color:"#DCA561" }}>guest</span>@<span style={{ color:"#7E9CD8" }}>nareh.dev</span>:~$ {" "}
          <input
              autoFocus
              ref={inputRef}
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
  );
}

export default App;
