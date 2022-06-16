import React, { FC } from 'react';
import { Ping } from '../bin/Ping';
import { About } from '../bin/About';
import { Bash } from '../bin/Bash';
import { Empty } from '../bin/Empty';
import { Banner } from '../bin/Banner';
import { Help } from '../bin/Help';
import { Repo } from '../bin/Repo';
import { FunFact } from '../bin/FunFact';
import '../styles/global.css';

interface CommandProps {
    commandInput: string;
}

export const Command: FC<CommandProps> = ({ commandInput }) => {
    switch (commandInput) {
        case "":
            return <Empty />
        case "help":
            return <Help />
        case "ping":
            return <Ping />
        case "about":
            return <About />
        case "bash":
            return <Bash />
        case "banner":
            return <Banner />
        case "repo":
            return <Repo />
        case "funfact":
            return <FunFact />
        default:
            return (
                <div className="command">zsh: command not found: <span style={{ color:"#E82424" }}>{commandInput}</span></div>
            )
    }
};

export default Command;
