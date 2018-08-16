import React, { Component } from 'react'
import {DUMBELL_TYPES} from "../../constants/global.constants";

/**
 * Dumbell
 */

export class Dumbell extends Component {

    get weight(){
        return this.props.dumbellInfo.weight;
    }

    get type() {
        return this.props.dumbellInfo.type
    }

    get sizeClass() {
        const weight = this.weight;
        if (weight < 2.5) {
            return "dumbell-container_size-smallest";
        } else if (weight < 5) {
            return "dumbell-container_size-small";
        } else if (weight < 10) {
            return "dumbell-container_size-medium";
        } else if (weight < 20) {
            return "dumbell-container_size-big";
        } else {
            return "dumbell-container_size-biggest";
        }
    }

    get typeClass() {
        const type = DUMBELL_TYPES[this.type];
        if (!type) return "dumbell-container_type-metallic";
        return `dumbell-container_type-${type}`;
        // switch (this.type) {
        //     case 0: return "dumbell-container_type-metallic";
        //     case 1: return "dumbell-container_type-plastic";
        //     case 2: return "dumbell-container_type-yellow";
        //     case 3: return "dumbell-container_type-red";
        //     case 4: return "dumbell-container_type-green";
        //     case 5: return "dumbell-container_type-blue";
        //     default: return "dumbell-container_type-metallic";
        // }
    }

    get containerClassNames() {
        return "dumbell-container "+this.sizeClass+" "+this.typeClass
    }

    click(e){
        if (this.props.onClick) this.props.onClick(e)
    }

    render() {
        return (
            <div className={this.containerClassNames} onClick={this::this.click}>
                <div key={0} className="dumbell"></div>
                <div key={1} className="dumbell-text">{this.weight}кг</div>
            </div>
        )
    }
}