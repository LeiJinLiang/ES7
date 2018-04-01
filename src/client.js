import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from './components/Slider'
import ChildCon from './container/ChildCon'
import AsyncCon from './container/AsyncCon'
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
                <li>
                    <Link to="/more">More</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={ChildCon} />
            <Route path="/about" component={Slider} />
            <Route path="/more" component = {AsyncCon}/>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);


export default BasicExample;