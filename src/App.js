import React from 'react';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import {Link} from 'react-router-dom';
import './App.css';

import Main from './components/main';

function App() {
return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} 
        to="/"> My Portfolio </Link>} scroll>
            <Navigation>
                <Link to="/resume" className="mdl-navigation__link2"><div style={{display:'inline-block', color: 'limegreen', marginRight: '10px'}}>01. </div> Resume</Link>
                <Link to="/projects" className="mdl-navigation__link2"><div style={{display:'inline-block', color: 'limegreen', marginRight: '10px'}}>02. </div> Projects</Link>
                <Link to="/music" className="mdl-navigation__link2"><div style={{display:'inline-block', color: 'limegreen', marginRight: '10px'}}>03. </div> Music</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} 
        to="/"> My Portfolio </Link>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/music">Music</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout> 
    </div>
  );
}

export default App;
