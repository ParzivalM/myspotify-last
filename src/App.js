import React from 'react';
import logo from './logo.svg';
import './App.css';
import LabeledInput from './LabeledInput'
import { Link, Route, Switch } from 'react-router-dom'

import About from './Pages/About';
import Login from './Pages/Login';
import Category from './Pages/Category';

function App() {


    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             <a href="/categories">Link to  another page </a>
    //             <LabeledInput
    //                 id="client-id"
    //                 label="Client Id"
    //                 placeholder="Client Id Placeholder"
    //                 defaultValue="Default"
    //             />
    //         </header>
    //     </div>
    // );

    return (
        <div className="App">
            <header className="App-header">
              <nav>
                  <ul>
                      <li>
                          <Link to='/'>Home</Link>
                      </li>
                      <li>
                          <Link to='/login'>Login</Link>
                      </li>
                      <li>
                          <Link to='/About'>About</Link>
                      </li>
                  </ul>
              </nav>
            </header>
            <main>
                <Switch>
                <Route path= '/'
                       exact
                       render={() => <div>Home Page</div>}/>

                <Route path= '/about'
                       component = {About}/>

                <Route path= '/login'
                       component = {Login}/>

                <Route path= '/categories/:id'
                       component = {Category}/>

                </Switch>
            </main>
        </div>
    );
}

export default App;