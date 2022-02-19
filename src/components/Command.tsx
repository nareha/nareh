import React, { FC } from 'react';
import { Ping } from '../bin/Ping';
import { About } from '../bin/About';
import { Bash } from '../bin/Bash';

interface CommandProps {
    commandInput: string;
}

export const Command: FC<CommandProps> = ({ commandInput }) => {
    switch (commandInput) {
        case "ping":
            return <Ping />
        case "about":
            return <About />
        case "bash":
            return <Bash />
        default:
            return (
                <div>zsh: command not found: {commandInput}</div>
            )
    }
};

export default Command;
