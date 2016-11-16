import React, {Component, PropTypes} from 'react'

class World extends Component {

    render() {
        return <span>{this._getPerson()}</span>
    }

    _getPerson() {
        return this.props.who || 'bob';
    }
}

export default World;

World.propTypes = {
    who: PropTypes.string
};
