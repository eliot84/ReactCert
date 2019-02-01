
//IMPORTING
//import all of react package
import React from 'react';
//import only render method from react-dom package
import { render } from 'react-dom';
//import the Store picker component. 
import StorePicker from './components/StorePicker';




//Render the Storepicker component to the div #main in index.html
render(<StorePicker />, document.querySelector('#main'));