import React, { Component } from 'react'
import classnames from "classnames/dedupe";
import NumericInput from 'react-numeric-input';

export class DumbellCreatorPopup extends Component {


    render() {
        return (
            <div className="dumbell-creator-popup">
                <span className="dumbell-creator-popup__title">Добавление блина</span>
                <div className="dumbell-creator-popup__option">
                    <span className="dumbell-creator-popup__option__title">Вес:</span>
                    <div className="dumbell-creator-popup__option__value">
                        <NumericInput className={classnames(
                                "dumbell-creator-popup__option__value__input form-control",
                                {"is-invalid": this.weighInputInvalid}
                            )}
                            onChange={::this.onChangeWeight}
                            min={0}
                            format={(x) => `${x} кг`}
                            value={0.5}
                        />
                    </div>
                </div>
                <div className="dumbell-creator-popup__option">
                    <span className="dumbell-creator-popup__option__title">Тип:</span>
                    <div className="dumbell-creator-popup__option__value">
                        <NumericInput className={classnames(
                                "dumbell-creator-popup__option__value__input form-control",
                                {"is-invalid": this.typeInputInvalid}
                            )}
                            onChange={::this.onChangeType}
                            min={0}
                            max={1}
                            value={1}
                        />
                    </div>
                </div>
                <button className="btn btn-light btn-sm dumbell-creator-popup__btn">Добавить</button>
            </div>
        )
    }

    onChangeWeight(){

    }
    onChangeType(){

    }


}