import React, { Component } from 'react'
import classnames from "classnames/dedupe";
import NumericInput from 'react-numeric-input';
import PropTypes from 'prop-types';
import {DUMBELL_TYPES, DUMBELL_TYPES_COUNT} from "../../constants/global.constants";

class DumbellOptionsPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: this.props.dumbell.weight,
            type: this.props.dumbell.type,
        }
    }

    render() {
        return (
            <div className="dumbell-popup" style={{width: 160}}>
                <span className="dumbell-popup__title">Настройки</span>
                <div className="dumbell-popup__option">
                    <span className="dumbell-popup__option__title">Вес:</span>
                    <div className="dumbell-popup__option__value">
                        <NumericInput className={classnames(
                                "dumbell-popup__option__value__input form-control",
                                {"is-invalid": this.isWeightInputInvalid}
                            )}
                            onChange={::this.onChangeWeight}
                            min={0}
                            format={(x) => `${x} кг`}
                            value={this.state.weight}
                        />
                    </div>
                </div>
                <div className="dumbell-popup__option">
                    <span className="dumbell-popup__option__title">Тип:</span>
                    <div className="dumbell-popup__option__value">
                        <NumericInput className={classnames(
                                "dumbell-popup__option__value__input form-control",
                                {"is-invalid": this.isTypeInputInvalid}
                            )}
                            onChange={::this.onChangeType}
                            min={0}
                            format={::this.typeFormat}
                            max={DUMBELL_TYPES_COUNT-1}
                            value={this.state.type}
                        />
                    </div>
                </div>
                <button className={classnames({
                        "btn btn-light btn-sm dumbell-popup__btn": true,
                        "disabled": this.isSaveButtonDisabled
                    })}
                    onClick={::this.clickSave}
                >Сохранить</button>
                <button className={classnames({
                        "btn btn-light btn-sm dumbell-popup__btn": true,
                    })}
                    onClick={::this.clickRemove}
                >Удалить</button>
            </div>
        )
    }



    typeFormat(val){
        const type = DUMBELL_TYPES[val];
        if (!type) return val;
        return `${val} (${type})`
    }

    onChangeWeight(val){
        this.setState({...this.state, weight: val})
    }
    onChangeType(val){
        this.setState({...this.state, type: val})
    }

    get isWeightInputInvalid() {
        const val = this.state.weight;
        return !(val > 0);
    }

    get isTypeInputInvalid() {
        const val = this.state.type;
        if (val == null) return true;
        if (val != 0 && val%1 != 0) return true;
        if (val < 0 || val > DUMBELL_TYPES_COUNT-1) return true;
        return false;
    }

    get isWeightChanged() {
        return this.state.weight != this.props.dumbell.weight;
    }

    get isTypeChanged() {
        return this.state.type != this.props.dumbell.type;
    }

    get isSaveButtonDisabled(){
        return this.isWeightInputInvalid
            || this.isTypeInputInvalid
            || (!this.isWeightChanged && !this.isTypeChanged)
    }

    clickSave(){
        if (this.isSaveButtonDisabled) return;
        this.props.onSave(this.state)
    }

    clickRemove(){
        this.props.onRemove();
    }
}

DumbellOptionsPopup.propTypes = {
    onSave: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export {DumbellOptionsPopup};