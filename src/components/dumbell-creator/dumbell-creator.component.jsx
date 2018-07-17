import React, { Component } from 'react'
import { Manager, Reference, Popper } from 'react-popper';
import classnames from "classnames/dedupe";
import {DumbellCreatorPopup} from "./dumbell-creator-popup.component";
import {getPopper} from "../utils/popper";

/**
 * DumbellCreator
 */

export class DumbellCreator extends Component {

    constructor(props){
        super(props);
        this.state = {
            popupShown: true
        }
    }

    render() {
        return (
            <Manager>
                <Reference>
                    {conf => this.renderEmptyDumbell(conf)}
                </Reference>
                {this.state.popupShown && this.renderPopup()}
            </Manager>
        )
    }

    renderPopup(){
        return (
            <Popper placement="right">
                {props => getPopper(props, <DumbellCreatorPopup/>)}
            </Popper>
        )
    }

    renderEmptyDumbell({ref}) {
        return (
            <div ref={ref}
                 className={classnames({
                     "dumbell-container dumbell-container_size-big dumbell-container_type-creator": true,
                     "active": this.state.popupShown
                 })}
                 onClick={::this.onDumbellClick}
            >
                <div className="dumbell dumbell-creator">
                    <div className="dumbell-creator__icon">
                        <i className="fa fa-plus"/>
                    </div>
                </div>
            </div>
        )
    }

    onDumbellClick(){
        const state = this.state;
        this.setState({...state, popupShown: !state.popupShown})
    }
}