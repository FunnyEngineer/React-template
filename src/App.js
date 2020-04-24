import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonsState] = useState({
    persons:[
      {name: 'Kevin', age:28},
      {name: 'Ivan', age:29},
      {name: 'Roy', age:25}
    ],
    showPersons : false
  });

  const [otherState, setOtherState] = useState('some other state');
  
  console.log(personState, otherState);

  const switchNameHandler = (newName) => {
    // console.log("Was Clicked!!")
    //DONOT DO THIS state.persons[0].name = "Ting-Yu";
    setPersonsState({
      persons: [
        {name: newName, age:28},
        {name: 'Randy', age:3},
        {name: 'Roy', age:25}
      ]
    })
};

  const nameChangedHandler =  (event) => {
    setPersonsState({
      persons: [
        {name: 'Kevin', age:28},
        {name: event.target.value, age:3},
        {name: 'Roy', age:25}
      ]
    })
};

const togglePersonHandler = () =>{
  const doseShow = personState.showPersons; 
  setPersonsState({...personState, showPersons: !doseShow});
}

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1> Hi, I am a React app</h1>
      <button 
      style = {style}
      onClick = {togglePersonHandler}>Switch name</button>
      {personState.showPersons == true ?
        <div>
        <Person 
          name ={personState.persons[0].name} 
          age = {personState.persons[0].age}></Person>
        <Person 
          name = {personState.persons[1].name} 
          age ={personState.persons[1].age}
          click = {switchNameHandler.bind(this,'WOW!!')}
          change = {nameChangedHandler}>My hobbies: Pronhub</Person>
        <Person 
          name = {personState.persons[2].name} 
          age = {personState.persons[2].age}></Person>
        </div> : null
      }
      
    </div>
  );
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I am a React app'));
}

export default App;
