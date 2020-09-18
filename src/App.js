import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main/Main';
import PostDetail from './components/PostDetails/PostDetail';
import Nomatch from './components/Nomatch/Nomatch';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Router>
         <Switch>
           <Route path="/home">
              <Main></Main>
           </Route>
           <Route path="/post/:postDetail">
             <PostDetail></PostDetail>
           </Route>
           <Route exact path="/">
              <Main></Main>
           </Route>
           <Route path="*">
              <Nomatch></Nomatch>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
