import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';
export default class experience extends Component {
    render() {
        return (
            <div>
            <Grid>
                    <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p> 
                    </Cell>
                    <Cell col={8}>
                    <p><h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4> <i className="fa fa-building"></i> <div style={{ display: 'inline', color: '#d7bbff'}}> {this.props.company}</div> </p>
                    <p>{this.props.jobDescription}</p>   
                    </Cell>
            </Grid> 
            </div>
        )
    }
}
