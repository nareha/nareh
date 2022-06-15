import React, { FC } from 'react';
import '../styles/global.css';

export const Help: FC = () => {
  return (
      <div className="command">
        Available commands: about, banner, bash, help, ping
      </div>
  );
};
