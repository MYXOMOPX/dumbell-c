import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeDumbellList, changeResetDumbellList} from "../actions/dumbell.action";
import {DumbellCreator} from "../components/dumbell/dumbell-creator/dumbell-creator.component";
import {DumbellInfo} from "../model/DumbellInfo";
import {DumbellWithOptions} from "../components/dumbell/dumbell-with-options.component";



const stateToProps = (state) => ({
    dumbells: state.dumbells
});
const dispatchToProps = (dispatch) => ({
    changeDumbellList: bindActionCreators(changeDumbellList, dispatch),
    resetDumbellList: bindActionCreators(changeResetDumbellList, dispatch),
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
        this.props.changeDumbellList(dumbells);
    }

    onDumbellRemove(dumbell){
        const index = this.props.dumbells.indexOf(dumbell);
        let arr = this.props.dumbells.slice(0);
        arr.splice(index,1);
        this.props.changeDumbellList(arr);
    }

    renderDumbells() {
        return this.props.dumbells
            .sort((a,b) => a.weight - b.weight)
            .map((dumbell,i) => {
                return this.renderDumbell(dumbell,i)
            })
        ;
    }

    render() {
        return (
            <div className="dumbell-selector">
                <a href="javascript:void(0)" className="dumbell-selector__reset">
                    <i className="fa fa-undo dumbell-selector__reset__icon"
                       onClick={::this.resetDumbellList}
                       title="Вернуть стандартный список"
                    />
                </a>
                {this.renderDumbells()}
                <div className="dumbell-selector__item dumbell-selector__item-creator"
                     title="Добавить блин"
                >
                    <DumbellCreator onCreate={::this.onCreateDumbell}/>
                </div>
            </div>
        )
    }

    onCreateDumbell(data){
        const dumbell = new DumbellInfo(data.weight, data.type);
        const dumbells = this.props.dumbells.slice(0);
        dumbells.push(dumbell);
        this.props.changeDumbellList(dumbells);
    }

    resetDumbellList(){
        this.props.resetDumbellList()
    }
}