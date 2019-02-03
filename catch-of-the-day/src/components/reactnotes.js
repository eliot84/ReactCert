



/*
//1. Creating a component and rendering it 
//location: components/StorePicker

class StorePicker extends React.Component{


	//Render method returns what should load on the page
	render(){
		return <form></form>
	}
}

//make it accessible to other files
export default StorePicker;
*/


/*
//Importing
//location: index.js
//import all of react package
import React from 'react';
//import only render method from react-dom package
import { render } from 'react-dom';
//import the Store picker component. 
import StorePicker from './components/StorePicker';




//Render the Storepicker component to the div #main in index.html
render(<StorePicker />, document.querySelector('#main'));



3. JSX 

   If you want to use a class make sure to call it className not class 

   if you need to return more than 1 line of code make sure to put the return code inside of a parenthesis return (   )

   If you want to return multiple elements you need to enclose all of them inside a container. Return only lets you return one element. You can use:
   <React.Fragment>
	     //your code
	     //a form
	     //a paragraph
	     //a div
   </React.Fragment>
*/