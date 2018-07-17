import React, { Component } from 'react'

/**
 * Dumbell
 */

export class PageContent extends Component {

    render() {
        return (
            <div className="page-content">
                {this.props.children}
            </div>
        )
    }
}