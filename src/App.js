import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Search from './Components/Search';
import Book from './Pages/Book';
import Books from './Pages/Books';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = '/' >
          <Books/>
        </Route>
        <Route exact path = '/search' >
          <Search/>
        </Route>
        <Route path = '/:id' >
          <Book/>
        </Route>
        <Redirect to = '/' />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
