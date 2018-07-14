import React, { Component } from 'react'
import NumericInput from 'react-numeric-input';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeBarWeight, changeRequiredWeight} from "../actions/bar-settings.action";

const stateToProps = (state) => ({
    barWeight: state.barSettings.barWeight,
    requiredWeight: state.barSettings.requiredWeight,
    dumbells: state.dumbells
});
const dispatchToProps = (dispatch) => ({
    changeBarWeight: bindActionCreators(changeBarWeight, dispatch),
    changeRequiredWeight: bindActionCreators(changeRequiredWeight, dispatch)
});

@connect(stateToProps, dispatchToProps)
export class BarSettings extends Component {

    get maxRequiredWeight() {
        return this.props.dumbells.reduce((val, dumbell) => {
            return val + dumbell.weight*dumbell.count
        },0) + this.props.barWeight
    }

    render() {
        return (
            <div className="bar-settings">
                <div className="bar-settings__property">
                    <div className="bar-settings__property__label">Вес грифа:</div>
                    <div className="bar-settings__property__value">
                        <NumericInput className="bar-settings__property__value__input"
                                      value={this.props.barWeight}
                                      onChange={::this.onChangeBarWeight}
                                      min={0}
                                      max={100}
                                      step={0.5}
                        />
                    </div>
                </div>
                <div className="bar-settings__property">
                    <div className="bar-settings__property__label">Нужный вас:</div>
                    <div className="bar-settings__property__value">
                        <NumericInput className="bar-settings__property__value__input"
                                      value={this.props.requiredWeight}
                                      onChange={::this.onChangeRequiredWeight}
                                      min={this.props.barWeight}
                                      max={this.maxRequiredWeight}
                                      step={0.5}
                        />
                    </div>
                </div>
            </div>
        )
    }

    onChangeBarWeight(val){
        this.props.changeBarWeight(val);
    }

    onChangeRequiredWeight(val){
        this.props.changeRequiredWeight(val)
    }
}