import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeDumbellList} from "../actions/dumbell.action";
import {DumbellCreator} from "../components/dumbell/dumbell-creator/dumbell-creator.component";
import {DumbellInfo} from "../model/DumbellInfo";
import {DumbellWithOptions} from "../components/dumbell/dumbell-with-options.component";



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
     * @param dumbell {DumbellInfo} - информация о блине
     * @param key {number} - ключ для render
     * @return {XML}
     */
    renderDumbell(dumbell, key) {
        return (
            <DumbellWithOptions
                key={key}
                dumbellInfo={dumbell}
                onSettingsChange={this::this.onDumbellChange}
                onRemove={this::this.onDumbellRemove}
            />
        )
    }


    onDumbellChange(){
        const dumbells = this.props.dumbells.slice(0);
        this.props.dispatchChangeDumbellList(dumbells);
    }

    onDumbellRemove(dumbell){
        const index = this.props.dumbells.indexOf(dumbell);
        let arr = this.props.dumbells.slice(0);
        arr.splice(index,1);
        this.props.dispatchChangeDumbellList(arr);
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
                    <DumbellCreator onCreate={::this.onCreateDumbell}/>
                </div>
            </div>
        )
    }

    onCreateDumbell(data){
        const dumbell = new DumbellInfo(data.weight, data.type);
        const dumbells = this.props.dumbells.slice(0);
        dumbells.push(dumbell);
        this.props.dispatchChangeDumbellList(dumbells);
    }
}