import React, { Component } from 'react'
import {getPopper} from "../utils/popper";
import PropTypes from 'prop-types';
import {DumbellInfo} from "../../model/DumbellInfo";
import NumericInput from "react-numeric-input"
import {Reference, Manager, Popper} from "react-popper";
import {OnClickOut} from "../../util/decorator/on-click-out.decorator";
import {Dumbell} from "./dumbell.component";
import {DumbellOptionsPopup} from "./dumbell-options-popup";
import {DumbellCreatorPopup} from "./dumbell-creator/dumbell-creator-popup.component";

/**
 * DumbellWithOptions
 */
class DumbellWithOptions extends Component {

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
            <div className="dumbell-selector__item" ref={::this.setMainRef}>
                <Manager>
                    <Reference>
                        {({ref}) => (
                            <Dumbell ref={ref} onClick={this::this.togglePopup}
                                     dumbellInfo={this.props.dumbellInfo}
                            />
                        )}
                    </Reference>
                    {this.state.popupShown && this.renderPopup()}
                </Manager>
                <NumericInput
                    className="dumbell-selector__item__number-input form-control"
                    value={this.props.dumbellInfo.count}
                    onChange={::this.onCountCommit}
                    min={0}
                    max={98}
                    step={2}
                />
            </div>
        )
    }

    @OnClickOut(cmp => cmp.mainRef)
    closePopup(){
        if (this.state.popupShown) this.togglePopup();
    }


    renderPopup(){
        return (
            <Popper placement="down">
                {props => getPopper(props, <DumbellCreatorPopup onCreate={console.log}/>)}
            </Popper>
        )
    }

    togglePopup(){
        const state = this.state;
        this.setState({...state, popupShown: !state.popupShown})
    }

    onCountCommit(count){
        this.props.dumbellInfo.count = count;
        this.props.onSettingsChange(this.props.dumbellInfo, {count});
    }

    onSave({weight, type}){
        this.props.dumbellInfo.weight = weight;
        this.props.dumbellInfo.type = type;
        this.props.onSettingsChange(this.props.dumbellInfo, {weight, type});
    }

    onRemove(){
        this.props.onRemove(this.props.dumbellInfo);
    }
}

DumbellWithOptions.propTypes = {
    onSettingsChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    dumbellInfo: PropTypes.instanceOf(DumbellInfo).isRequired,
};

export {DumbellWithOptions}