import React, { Component } from 'react'
import {Grid} from 'react-mdl';
import logo from '../images/tblogo.png'
export default class music extends Component {
    
    render() {
        return (
            <div>
                <Grid style={{backgroundColor: '#000412', height: '100%'}}>
                <img  className="logo-banner" src={logo} alt="logo banner"/>
                </Grid>
                
                
                <div className="vid-box">
                <iframe title="music_iframe" className="iframe-case" width="720" height="405" src="https://www.youtube.com/embed/109sxA_bLyA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
               
                <div className="iframe-links">
                    <center><h4>Artist Profile Links</h4></center>
                    <hr style={{width: '95%', justifyContent: 'center'}}></hr>
                    <div className="social-links2">
                    <a href="https://www.youtube.com/channel/UChcEzKxdxOzEbY_w1s0n5Zg" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube-square" aria-hidden="true" alt="Youtube" /></a> 
                    <a href="https://www.soundcloud.com/tri-bass" rel="noopener noreferrer" target="_blank"><i className="fa fa-soundcloud" aria-hidden="true" alt="Soundcloud" /></a>
                    <a href="https://open.spotify.com/artist/7332GWrXGnDcXKwAW4NCar" rel="noopener noreferrer" target="_blank"><i className="fa fa-spotify" aria-hidden="true" alt="Spotify" /> </a>
                    <a href="https://itunes.apple.com/us/artist/tri-bass/1151774325" rel="noopener noreferrer" target="_blank"><i className="fa fa-apple" aria-hidden="true" alt="Apple Music" /> </a>
                    </div>
                    <hr style={{width: '95%', justifyContent: 'center'}}></hr>
                    <p>Tri Bass Music is a Music / Video channel started by Juvon Hyatt in 2011 to host his songs and remixes. After about 3 years the channel started to pick up getting more and more subscribers.
                        His uploads also included occational guest music uploads by people requesting promotion via his channel. As of current tri bass music has a subscriber count of 4.4k.
                        His other artist names include: Seizhiro, Ardent Blaze.
                    </p>
                    <p className="arrow">[ <i className="fa fa-long-arrow-left"></i> Featured Song ]</p>
                </div>
                </div>   
                <Grid style={{backgroundColor: '#000412', height: '100%'}}>
                    <div style={{height: '50px'}}>

                    </div>
                </Grid>
            </div>
        )
    }
}
