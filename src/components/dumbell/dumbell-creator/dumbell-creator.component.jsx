import React, { Component } from 'react'
import { Manager, Reference, Popper } from 'react-popper';
import classnames from "classnames/dedupe";
import {DumbellCreatorPopup} from "./dumbell-creator-popup.component";
import {getPopper} from "../../utils/popper";
import PropTypes from 'prop-types';
import {OnClickOut} from "../../../util/decorator/on-click-out.decorator";

/**
 * DumbellCreator
 */

class DumbellCreator extends Component {

    constructor(props){
        super(props);
        this.state = {
            popupShown: false
        }
    }

    setMainRef(element){
        this.mainRef = element;
    }

    render() {
        return (
            <div ref={::this.setMainRef}>
                <Manager>
                    <Reference>
                        {conf => this.renderEmptyDumbell(conf)}
                    </Reference>
                    {this.state.popupShown && this.renderPopup()}
                </Manager>
            </div>
        )
    }

    renderPopup(){
        return (
            <Popper placement="left">
                {props => getPopper(props, <DumbellCreatorPopup onCreate={::this.onCreate}/>)}
            </Popper>
        )
    }

    onCreate(data){
        this.togglePopup();
        this.props.onCreate(data)
    }

    @OnClickOut(cmp => cmp.mainRef)
    closePopup(){
        if (this.state.popupShown) this.togglePopup();
    }

    renderEmptyDumbell({ref}) {
        return (
            <div ref={ref}
                 className={classnames({
                     "dumbell-container dumbell-container_size-big dumbell-container_type-creator": true,
                     "active": this.state.popupShown
                 })}
                 onClick={::this.togglePopup}
            >
                <div className="dumbell dumbell-creator">
                    <div className="dumbell-creator__icon">
                        <i className="fa fa-plus"/>
                    </div>
                </div>
            </div>
        )
    }

    togglePopup(){
        const state = this.state;
        this.setState({...state, popupShown: !state.popupShown})
    }
}

DumbellCreatorPopup.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export {DumbellCreator}