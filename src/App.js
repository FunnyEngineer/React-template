import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonsState] = useState({
    persons:[
      {id:'123', name: 'Kevin', age:28},
      {id:'456', name: 'Ivan', age:29},
      {id:'789', name: 'Roy', age:25}
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

  var nameChangedHandler =  (event, id) => {
    const personIndex = personState.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...personState[personIndex]
    };
    person.name = event.target.value;

    const persons = [...personState];
    persons[personIndex] = person;
    setPersonsState({...personState,
     persons: persons
    })
};

const deletePersonHandler = (personIndex) =>{
  const persons = [...personState.persons];
  persons.splice(personIndex, 1);
  setPersonsState({...personState, persons: persons});
}

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

  let persons = null;
  if (personState.showPersons){
    persons = (
      <div>
        {personState.persons.map((person, index) =>{
          return  <Person 
          click = {() => deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          change = {(event) => nameChangedHandler(event, person.id)} />
        })}
      </div> 
    )
  }
  return (
    <div className="App">
      <h1> Hi, I am a React app</h1>
      <button 
      style = {style}
      onClick = {togglePersonHandler}>Switch name</button>
      {persons}
      
    </div>
  );
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I am a React app'));
}

export default App;
