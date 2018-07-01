import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {DumbellSelector} from "./dumbell/dumbell-selector.container"

class App extends Component {
    render() {
        return <DumbellSelector key="1"/>
    }
}

const HotApp = hot(module)(App); // Для HMR

export {HotApp as App}