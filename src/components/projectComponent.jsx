import React,{ Component } from 'react'
import {Grid, Cell} from 'react-mdl';

export default class experience extends Component{
    render() {
        return (
            <div>
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <p><h4 style={{marginTop: '0px'}}><div style={{ display: 'inline', color: '#d7bbff'}}>{this.props.projectName}</div></h4></p>
                    <p><div style={{display: 'flex'}}>{this.props.projectDesc}</div></p>
                </Cell>
            </Grid>
            </div>
        )
    }
}