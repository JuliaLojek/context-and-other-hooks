import React, { useState, useEffect } from 'react';
import './App.css';
import CounterPage from './pages/CounterPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { CounterContext } from './contexts/CounterContext';
import { UsersContext } from './contexts/UsersContext';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import CounterClass from './components/CounterClass';
import UsersClass from './components/UsersClass';
import CounterCallback from './pages/CounterCallback';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [usersList, setUsersList] = useState([]);
  const [title, setTitle] = useState("Hejka!");

  const counterData = {
    counterValue,
    setCounterValue
  };

  const usersData = {
    usersList,
    setUsersList
  };

  const changeTitle = () => {
    if (title === "Hejka!") {
      setTitle("Siemaneczko")
    } else {
      setTitle("Hejka!")
    }
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(results => results.json())
      .then(json => setUsersList(json.results))
  }, [])

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">home</Link>
        <span> | </span>
        <Link to="/counter">counter</Link>
        <span> | </span>
        <Link to="/users">users</Link>
        <span> | </span>
        <Link to="/counterclass">counter-class</Link>
        <span> | </span>
        <Link to="/usersclass">users-class</Link>
        <span> | </span>
        <Link to="/counter-usecallback">counter-useCallback</Link>
      </nav>

      <div className="App">
        <h2>Counter App</h2>
      </div>

      <CounterContext.Provider value={counterData}>
        <UsersContext.Provider value={usersData}>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/counterclass" component={CounterClass} />
          <Route path="/usersclass" component={UsersClass} />
          <Route path="/counter-usecallback" component={() => <CounterCallback title={title} changeTitle={changeTitle} />} />
        </Switch>

        </UsersContext.Provider>
      </CounterContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
