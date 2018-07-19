import React, { Component } from 'react'
import {connect} from "react-redux";
import {getDumbellsForWeight} from "../util/dumbell-counter";
import {Dumbell} from "../components/dumbell/dumbell.component";

const stateToProps = (state) => ({
    barWeight: state.barSettings.barWeight,
    requiredWeight: state.barSettings.requiredWeight,
    dumbells: state.dumbells
});

@connect(stateToProps)
export class BarPreview extends Component {

    render() {
        return (
            <div className="bar-preview">
                {::this.renderDumbells()}
            </div>
        )
    }

    renderDumbells() {
        const {dumbells, barWeight, requiredWeight} = this.props;
        const dumbellsForRender = getDumbellsForWeight(dumbells, requiredWeight-barWeight);
        if (!dumbellsForRender) return (<span>Невозможно</span>);
        return dumbellsForRender.map((dumbell,i) => {
            return (
                <div key={i} className="bar-preview__item">
                    <Dumbell dumbellInfo={dumbell}/>
                </div>
            )
        });
    }
}