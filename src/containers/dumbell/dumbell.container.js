import React, { Component } from 'react'

/**
 * Dumbell
 */

export class Dumbell extends Component {

    get weight(){
        return this.props.weight
    }

    get size() {
        return this.props.size || 1
    }

    get sizeClass() {
        switch (this.size) {
            case 0: return "dumbell_size-smallest";
            case 1: return "dumbell_size-small";
            case 2: return "dumbell_size-medium";
            case 3: return "dumbell_size-big";
            case 4: return "dumbell_size-biggest";
            default: return "dumbell_size-medium";
        }
    }

    get colorClass() {
        return "dumbell-metallic"
    }

    get classNames() {
        return "dumbell "+this.sizeClass+" "+this.colorClass
    }

    render() {
        return (
            <div className={this.classNames}></div>
        )
    }
}