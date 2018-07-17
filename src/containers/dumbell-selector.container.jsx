import React, { Component } from 'react'
import {Dumbell} from "../components/dumbell.component"
import NumericInput from 'react-numeric-input';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeDumbellList} from "../actions/dumbell.action";
import {DumbellCreator} from "../components/dumbell-creator/dumbell-creator.component";

const stateToProps = (state) => ({
    dumbells: state.dumbells
});
const dispatchToProps = (dispatch) => ({
    dispatchChangeDumbellList: bindActionCreators(changeDumbellList, dispatch)
});

@connect(stateToProps, dispatchToProps)
export class DumbellSelector extends Component {

    /**
     * Рендерит отдельный диск
     * @param dumbellInfo {DumbellInfo} - информация о блине
     * @param key {number} - число для рендеринга (React требует)
     * @return {XML}
     */
    renderDumbell(dumbellInfo, key) {
        return (
            <div key={key} className="dumbell-selector__item">
                <Dumbell
                    dumbellInfo={dumbellInfo}
                />
                <NumericInput
                    className="dumbell-selector__item__number-input"
                    value={dumbellInfo.count}
                    onChange={this.onDumbellCountCommit.bind(this,dumbellInfo)}
                    min={0}
                    max={98}
                    step={2}
                />
            </div>
        )
    }

    onDumbellCountCommit(dumbellInfo, count){
        dumbellInfo.count = count || 0;
        this.props.dispatchChangeDumbellList(this.props.dumbells);
    }

    renderDumbells() {
        return this.props.dumbells.map((dumbell,i) => {
            return this.renderDumbell(dumbell,i)
        });
    }

    render() {
        return (
            <div className="dumbell-selector">
                {this.renderDumbells()}
                <div className="dumbell-selector__item dumbell-selector__item-creator">
                    <DumbellCreator/>
                </div>
            </div>
        )
    }
}