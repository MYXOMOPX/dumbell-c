import React, { Component } from 'react'
import {Dumbell} from "./dumbell"

export class DumbellSelector extends Component {
    render() {
        return (
            <div>
                Тут текст <br/>
                <Dumbell weight="5" radius="10"/>
            </div>
        )
    }
}