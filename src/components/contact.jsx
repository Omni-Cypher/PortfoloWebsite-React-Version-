import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
export default class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Juvon Hyatt</h2>
                    <img 
                    src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <List>
            <div className="contact-list">

            <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> <i className="fa fa-envelope" aria-hidden="true"/>juvonhyatt@yahoo.com</ListItemContent>
            </ListItem>
            
            </div>
            
</List>

                </Cell>
                </Grid>
            </div>
        )
    }
}
