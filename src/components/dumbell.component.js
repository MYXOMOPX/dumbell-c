import React, { Component } from 'react'

/**
 * Dumbell
 */

export class Dumbell extends Component {

    get weight(){
        return Number(this.props.weight)
    }

    get size() {
        return this.props.size
    }

    get type() {
        return this.props.type
    }

    get sizeClass() {
        switch (this.size) {
            case 0: return "dumbell-container_size-smallest";
            case 1: return "dumbell-container_size-small";
            case 2: return "dumbell-container_size-medium";
            case 3: return "dumbell-container_size-big";
            case 4: return "dumbell-container_size-biggest";
            default: return "dumbell-container_size-medium";
        }
    }

    get typeClass() {
        switch (this.type) {
            case 0: return "dumbell-container_color-metallic";
            case 1: return "dumbell-container_color-plastic";
            default: return "dumbell-container_color-metallic";
        }
    }

    get containerClassNames() {
        return "dumbell-container "+this.sizeClass+" "+this.typeClass
    }

    render() {
        return (
            <div className={this.containerClassNames}>
                <div key={0} className="dumbell"></div>
                <div key={1} className="dumbell-text">{this.weight}kg</div>
            </div>
        )
    }
}