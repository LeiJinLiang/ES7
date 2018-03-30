import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from './components/Slider'
import Child from './components/Child'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Child} />
            <Route path="/about" component={Slider} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);


export default BasicExample;