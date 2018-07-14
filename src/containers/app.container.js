import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {DumbellSelector} from "./dumbell-selector.container"
import {BarSettings} from "./bar-settings.container"
import {BarPreview} from "./bar-preview";
import {PageHeader} from "../components/page-header.component";
import {PageContent} from "../components/page-content.component";


class App extends Component {
    render() {
        return (
            <div className="page">
                <PageHeader/>
                <PageContent>
                    <DumbellSelector />
                    <BarSettings/>
                    <BarPreview/>
                </PageContent>
            </div>
        )
    }
}

const HotApp = hot(module)(App); // Для HMR

export {HotApp as App}