import React, { Component } from 'react'
export class Dumbell extends Component {

    get weight(){
        return this.props.weight
    }

    get radius() {
        return this.props.radius || 5
    }

    render() {
        return <span>I'm a dumbell! with weight {this.weight} and radius {this.radius}</span>
    }
}