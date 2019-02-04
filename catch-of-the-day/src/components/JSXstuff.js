import React from 'react';


class JSXstuff extends React.Component{

	render(){

		//adding multiple elements and including javascript
		return (
		
			<React.Fragment>
				<p className="yo">the first of 2</p>
				{/*adding javascript */ }
		        <p>the second of 2 {100 + 300}</p>
		    </React.Fragment>
		   	) 

		//one liner
		//return <p>Using JSX!</p>
	}
}

export default JSXstuff;