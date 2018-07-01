import React, { Component } from 'react'
import {Dumbell} from "./dumbell.container"

export class DumbellSelector extends Component {
    render() {
        return (
            <div>
                Тут текст <br/>
                <Dumbell weight="5" size="4"/>
            </div>
        )
    }
}