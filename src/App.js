 
 import React from 'react';
 import ReactDOM from 'react-dom';

function Car(props) {
  return <h2>the model is { props.brand }!</h2>;
 }

function Garage() {
  return (
     <>
 	    <h1>Hello everyone</h1>
	    <Car brand="Swift" />
     </>
   );
 }

 ReactDOM.render(<Garage />, document.getElementById('root'));
 export default Garage;