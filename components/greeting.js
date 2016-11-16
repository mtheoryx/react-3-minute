import React, {Component} from 'react'
import Hello from './hello';
import Person from './person';
import faker from 'faker';

const getRandomName = () => faker.name.findName();

const Greeting = () => <div><Hello /> <Person who={getRandomName()} /></div>;

export default Greeting;
