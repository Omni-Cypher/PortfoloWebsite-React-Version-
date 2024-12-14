import React from 'react';
import home from './home'
import {Switch, Route} from 'react-router-dom';
import aboutme from './aboutme';
import contact from './contact';
import projects from './projects';
import resume from './resume';
import music from './music';
import recipes from './recipes';

const Main = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route  path="/aboutme" component={aboutme} />
        <Route  path="/contact" component={contact} />
        <Route  path="/projects" component={projects} />
        <Route  path="/resume" component={resume} />
        <Route  path="/music" component={music} />
        <Route  path="/recipes" component={recipes} />
    </Switch>
)
export default Main;