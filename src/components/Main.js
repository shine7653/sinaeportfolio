import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';


const Main = () => (

    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/aboutme" component={ Aboutme } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/resume" component={ Resume } />    
    </Switch>
)


export default Main;