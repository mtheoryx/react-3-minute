import React, {Component} from 'react'

export default class World extends Component {
    render() {
        return <span>{this._getPerson()}</span>
    }

    _getPerson() {
        return this.props.who || 'bob';
    }
}
