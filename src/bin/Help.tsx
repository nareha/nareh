import React, { FC } from 'react';
import '../styles/global.css';

export const Help: FC = () => {
  return (
      <div className="command">
        available commands: about, banner, bash, funfact, help, ping, repo
      </div>
  );
};
