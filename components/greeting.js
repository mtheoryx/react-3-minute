import React from 'react'
import faker from 'faker';

import Hello from './hello';
import Person from './person';


const getRandomName = () => faker.name.findName();

const Greeting = () => <div><Hello /> <Person who={getRandomName()} /></div>;

export default Greeting;
