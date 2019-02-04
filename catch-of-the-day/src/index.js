
//IMPORTING
//import all of react package
import React from 'react';
//import only render method from react-dom package
import { render } from 'react-dom';
//import the Store picker component. 
import StorePicker from './components/StorePicker';
import Noisy from './components/Noisy';
import JSXstuff from './components/JSXstuff';

import "./css/style2.css";
import AddCSS from './components/AddCSS';





//Render the Storepicker component to the div #main in index.html
render(<StorePicker />, document.querySelector('#main'));
//render(<Noisy />, document.querySelector('#noiseDiv'));
render(<JSXstuff />, document.querySelector('#JSXstuff'));

render(<AddCSS />, document.querySelector('#AddCSS'));