import React,  {Component } from "react";
export default class CComponent extends Component{
    render(){
        return (
            <div>
                <h1>Component {this.props.number}</h1>
            </div>
        )
    }
}
CComponent.defaultProps = {number : "999"}