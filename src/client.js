import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import asyncComponent from './asyncComponent'
const Slider = asyncComponent(()=>import('./components/Slider'))
const ChildCon = asyncComponent(()=> import('./container/ChildCon'))
const AsyncCon = asyncComponent(()=> import('./container/AsyncCon'))
const Tabs = asyncComponent(()=> import('./components/Tabs'))
const Anchor = asyncComponent(()=> import('./components/AnchorComponent'))

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const BasicExample = () => (
    <Router>
        <div>
            {/*<p><Link to="/">Home</Link></p>*/}
            {/*<p><Link to="/about">About</Link></p>*/}
            {/*<p><Link to="/more">More</Link></p>*/}
            {/*<p><Link to='/tab'>Tab</Link></p>*/}
            {/*<p><Link to='/anchor'>Anchor</Link></p>*/}
            <Route exact path="/" component={ChildCon} />
            <Route path="/about" component={Slider} />
            <Route path="/more" component = {AsyncCon}/>
            <Route path="/tab" component = {Tabs}/>
            <Route path="/anchor" component={Anchor} />
        </div>
    </Router>
);




export default BasicExample;