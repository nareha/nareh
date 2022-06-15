import React, { FC } from 'react';
import { Ping } from '../bin/Ping';
import { About } from '../bin/About';
import { Bash } from '../bin/Bash';
import { Empty } from '../bin/Empty';
import { Banner } from '../bin/Banner';
import '../styles/global.css';

interface CommandProps {
    commandInput: string;
}

export const Command: FC<CommandProps> = ({ commandInput }) => {
    switch (commandInput) {
        case "":
            return <Empty />
        case "ping":
            return <Ping />
        case "about":
            return <About />
        case "bash":
            return <Bash />
        case "banner":
            return <Banner />
        default:
            return (
                <div className="command">zsh: command not found: {commandInput}</div>
            )
    }
};

export default Command;
