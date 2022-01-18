import React, { FC } from 'react';
import { Ping } from '../bin/Ping';
import { About } from '../bin/About';

interface CommandProps {
    commandInput: string;
}

export const Command: FC<CommandProps> = ({ commandInput }) => {
    switch (commandInput) {
        case "ping":
            return <Ping />
        case "about":
            return <About />
        default:
            return (
                <div>Not a Command</div>
            )
    }
};

export default Command;