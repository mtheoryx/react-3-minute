import React, {Component} from 'react'

import Hello from './components/hello'
import Person from './components/person'

class App extends Component {

    render() {
        return <div><Hello /> <Person who="Learner"/></div>
    }
}

export default App;


