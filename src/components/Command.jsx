import React from 'react';
import { Ping } from './bin/Ping';
import { About } from './bin/About';
import { Banner } from './bin/Banner';
import { Help } from './bin/Help';
import { Repo } from './bin/Repo';
import { FunFact } from './bin/FunFact';
import '../global.css';

export const Command = ({ commandInput }) => {
    switch (commandInput) {
        case "":
            return <div />
        case "help":
            return <Help />
        case "ping":
            return <Ping />
        case "about":
            return <About />
        case "banner":
            return <Banner />
        case "repo":
            return <Repo />
        case "funfact":
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
