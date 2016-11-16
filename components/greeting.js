import React, {Component} from 'react'
import Hello from './hello';
import Person from './person';

export default class Greeting extends Component {

    render() {
        return <div><Hello /> <Person who="refactorer" /></div>
    }
}
