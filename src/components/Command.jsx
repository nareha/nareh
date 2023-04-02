import React from 'react';
import { Ping } from './bin/Ping';
import { About } from './bin/About';
import { Banner } from './bin/Banner';
import { Help } from './bin/Help';
import { Repo } from './bin/Repo';
import { FunFact } from './bin/FunFact';
import '../global.css';

export const Command = ({ commandInput }) => {
    switch (commandInput.toUpperCase()) {
        case "":
            return <div />
        case "HELP":
            return <Help />
        case "PING":
            return <Ping />
        case "ABOUT":
            return <About />
        case "BANNER":
            return <Banner />
        case "REPO":
            return <Repo />
        case "FUNFACT":
            return <FunFact />
        default:
            return (
                <div className="command">
                    Command not found: <span style={{ color:"#E82424" }}>{commandInput}</span>. Run <span className="cmd">help</span> for a list of available commands.
                </div>
            )
    }
};

export default Command;
