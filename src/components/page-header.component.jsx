import React, { Component } from 'react'

/**
 * Dumbell
 */

export class PageHeader extends Component {

    render() {
        return (
            <div className="page-header">
                {/*<img src="img/icon.png" className="page-header__logo"/>*/}
                <div className="page-header__text">Dumbbell Counter</div>
            </div>
        )
    }
}