import { useState } from 'react';
import './App.css';


const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.LastName} </h2>
      <h3>Age: {props.age} </h3>
    </>
  )
}

const App = () => {
  const name = null;
  const isNameShowing = false;
  return (
    <div className="App">
      {/* <h1>Hello, {2 + 3}!</h1>
      {name ? (
        <>
          test
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )} */}
      <Person name = {'john'} LastName= {'Doe'} age = {30}/>
      <Person name = {'jane'} LastName= {'dal'} age = {34}/>
      <Person name = {'alexis'} LastName= {'singh'} age = {21}/>
    </div>
  );
}
export default App;
