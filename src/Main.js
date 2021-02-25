import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
  return (
    <div className='main'>
        <h1><b>Hello!</b></h1>
        <p>Welcome to my page!</p>
        <nav>
            <Link to='/'>Landing Page</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    </div>
  );
}

export default Main;