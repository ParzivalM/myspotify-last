import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LabeledInput from './LabeledInput'

import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Category from "./Pages/Category";
import Login from "./Pages/Login";
import SpotifyCallback from "./Pages/SpotifyCallback";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        render={() => (<div>Home page</div>)}
                    />
                    <Route
                        path="/about"
                        component={About}
                    />
                    <Route
                        path="/login"
                        component={Login}
                    />
                    <Route
                        path="/categories"
                        exact
                        component={Categories}
                    />
                    <Route
                        path="/categories/:id"
                        component={Category}
                    />
                    <Route
                        path="/callback"
                        component={SpotifyCallback}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;