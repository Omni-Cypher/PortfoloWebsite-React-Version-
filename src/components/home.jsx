import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';

export default class home extends Component {
    render() {
        return (
            
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://avatars0.githubusercontent.com/u/5042929?s=460&v=4"
                        alt="profile-img"
                        className="profile-img "
                        />

                        
                        <div className="cogSpin">
                        <i className="fa fa-cog fa-spin"></i>
                        </div>
                        <div className="banner-text">
                            <h1>Juvon Hyatt</h1>
                            <hr/>
                        <p>Software Engineer | Website Developer | Music Producer</p>
                            <div className="social-links">
                        {/* linked in */}
                            <a href="https://www.linkedin.com/in/juvon-hyatt-5bb84b165/"  rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square hover" aria-hidden="true" />
                            </a>
                         {/* github */}
                        <a href="https://github.com/Omni-Cypher"  rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square hover" aria-hidden="true" />
                            </a>
                        {/* soundcloud */}
                        <a href="https://www.soundcloud.com/tri-bass"  rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-soundcloud hover" aria-hidden="true" />
                            </a>
                         {/* youtube */}
                        <a href="https://www.youtube.com/channel/UChcEzKxdxOzEbY_w1s0n5Zg"  rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square hover" aria-hidden="true" />
                            </a>
                        </div>
                        <p style={{fontSize: '12px'}}>Java • C# • .NET • HTML/CSS • Bootstrap • Javascript • React • SQL • Python</p>
                        </div>
                    </Cell>
                    <div className="sideLinks">
                    <li className="stackItem"><a href="https://github.com/Omni-Cypher"  aria-hidden="true" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a></li>
                    <li className="stackItem"><a href="https://www.linkedin.com/in/juvon-hyatt-5bb84b165/"  aria-hidden="true" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    <li className="stackItem"><a href="#" rel="noopener noreferrer" target="_blank"><i className="fa fa-codepen"></i></a></li>
                    <li className="stackItem"><a href="" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li className="stackItem"><a href="" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube"></i></a></li>
                    <svg height="110" width="50">
                    <line x1="20" y1="20" x2="20" y2="200" className="svgline" />
                    </svg>
                </div>
                
                </Grid>
              
            </div>
        )
    }
}


