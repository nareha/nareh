import React from "react";
import { Switch, Route } from "react-router-dom"
import Main from './Main.js';
import Blog from './Blog.js';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
            <Main />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </>
  );
}

export default App;
