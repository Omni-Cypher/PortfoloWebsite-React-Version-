import React, { Component } from 'react'
import {List, ListItem, ListItemContent, Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import {Link} from 'react-router-dom';
import recipes from './recipes';
import Recipe from './recipes';
export default class projects extends Component {
    constructor(props) {
        super(props);
            this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ){
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{paddingColor: '#fff', height: '256px', 
                    background: 'url(https://images.assetsdelivery.com/compings_v2/bryljaev/bryljaev1510/bryljaev151000087.jpg) center/cover'}}>Java Calculator</CardTitle>
                    <CardText>
                    This is a simple calculator created in java using GUI components.
                    </CardText>
                    <CardActions border>
                        <Button  rel="noopener noreferrer" target="_blank" href="https://github.com/Omni-Cypher/Java-Projects/tree/master/Calculator" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '256px', 
                    background: 'url(https://i.pinimg.com/originals/41/98/c5/4198c58169b12ae26ead9b1225de682d.png) center/cover'}}>Codex [Prototype]</CardTitle>
                    <CardText>
                    This is a workdesk AI called Codex.
                    It automated tasks I needed to do at work 
                    and also has a conversatable AI like siri to
                    entertain me when bored.
                    </CardText>
                    <CardActions border>
                        <Button  rel="noopener noreferrer" target="_blank" href="https://github.com/Omni-Cypher/Java-Projects/tree/master/Prototype" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '256px', 
                    background: 'url(https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-optimization-code-icon-png-image_316790.jpg) center/cover'}}>Map Reduce</CardTitle>
                    <CardText>
                    It takes a set of data and converts it into another set of data, where individual elements are broken down into tuples (Key-Value pair). 
                    Reduce Function – Takes the output from Map as an input and combines 
                    those data tuples into a smaller set of tuples, counting everytime a word appears.
                    </CardText>
                    <CardActions border>
                        <Button  rel="noopener noreferrer" target="_blank" href="https://github.com/Omni-Cypher/Java-Projects/tree/master/Mapreduce2" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>

                </div>

            )
        }
        else if(this.state.activeTab === 1 ){
            return (
                <div className="projects-grid">
                {/* School Management */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{paddingColor: '#fff', height: '256px', color: 'white',
                    background: 'url(https://drexel.edu/~/media/Images/coresite/backgrounds/Home/2018-09/franklin-institute-welcome/mobile.ashx) center/cover'}}>G6 University</CardTitle>
                    <CardText>
                    This is a web based school management system that is coded in php, msqli and Javascript.
                    It works similar to blackboard and holds Grades, Classes, Records and Inormation Processes.
                    This was My Final Project, Grade Recived: A. however this is a early unifishes backup so things are missing
                    </CardText>
                    <CardActions border>
                        <Button rel="noopener noreferrer" target="_blank"  href="http://juvonhyattportfolio.com/g6index.php" colored>Launch</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>
                
                {/* E-Commerce */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{paddingColor: '#fff', height: '306px',
                    background: 'url(https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/start-ecomerce-store-og.png) center/cover'}}>E-Commerce</CardTitle>
                    <CardText>
                    Simple E-Commerce website utilizing JavaScript, HTML, PHP, JQuery, MySql and Ajax
                    </CardText>
                    <CardActions border>
                        <Button  rel="noopener noreferrer" target="_blank" href="http://juvonhyattportfolio.com/ecindex.php" colored>Launch</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>

                {/* Recipe API */}
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{paddingColor: '#fff', height: '256px', color: '#fff',
                    background: 'url(https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505) center/cover'}}>Recipe API</CardTitle>
                    <CardText>
                    Food goes in, recipe comes out. Simple :)
                    This utilizes HTML, Bootstrap, JQuery, Java Script, Json, API
                    </CardText>
                    <CardActions border>
                        <Button  rel="noopener noreferrer" target="_blank" href="http://juvonhyattportfolio.com/recipes.html" colored>Launch</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>
                
                {/* Church-Page */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{paddingColor: '#fff', height: '256px', color: '#fff',
                    background: 'url(https://thefederalist.com/wp-content/uploads/2017/10/1024px-Interior_of_St_Andrews_Catholic_Church_in_Roanoke_Virginia-998x656.jpg) center/cover'}}>Church Page</CardTitle>
                    <CardText>
                    Blog Type Page. Simple Religious institution page design
                    </CardText>
                    <CardActions border>
                        <Button  rel="noopener noreferrer" target="_blank" href="http://juvonhyattportfolio.com/churchPage.html" colored>Launch</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2 ){
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{Color: '#fff', height: '256px', color: 'white',
                    background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center/cover'}}>Juvon Hyatt Portfolio Website</CardTitle>
                    <CardText>
                   This Entire Website was created in react using react-router-dom, react-mdl and a few other components.
                    </CardText>
                    <CardActions border>
                        <Button colored><Link className="homeButton" to="/">Home Page</Link></Button>
                        
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>   
                </Card>

                </div>
                
            )
        }

        else if(this.state.activeTab === 3 ){
            return (
                <div className="projects-grid">
                {/* Flappy Bird */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{paddingColor: '#fff', height: '256px', color: 'white',
                    background: 'url(https://image.cnbcfm.com/api/v1/image/101508108-flappy_bird.jpg?v=1395251000&w=740&h=416&ffmt=webp) center/cover'}}>C# Flappy Bird Game</CardTitle>
                    <CardText>
                    This project is a recreation of the famous mobile game that came out a few years ago called flappy bird
                    </CardText>
                    <CardActions border>
                        <Button rel="noopener noreferrer" target="_blank"  href="https://github.com/Omni-Cypher/flappyBird" colored>Launch</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    
                </Card>
          
                </div>
            )
        }

        
    }
    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Java</Tab>
                    <Tab>HTML</Tab>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            
            </div>
        )
    }
}
