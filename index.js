import React from 'react'

class Hello extends React.Component {
    render() {
        return <span>Hello</span>
    }
}

class World extends React.Component {
    render() {
        return <span>{this._getPerson()}</span>
    }

    _getPerson() {
        return this.props.who || 'bob';
    }
}

class App extends React.Component {

    render() {
        return <div><Hello /> <World who="David"/></div>
    }
}

export default App;


