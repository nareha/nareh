import React from "react";
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  return (
    <div className='main'>
        <h1>NAREH'S BLOG</h1>
        <nav>
            <ul>
                <li><a href='/'>home</a></li>
                <li>||</li>
                <li><a href='https://github.com/nareha'>github</a></li>
                <li>||</li>
                <li><a href='https://www.linkedin.com/in/nareha/'>linkedin</a></li>
            </ul> 
        </nav>
        
        
    </div>
  );
}

export default Blog;