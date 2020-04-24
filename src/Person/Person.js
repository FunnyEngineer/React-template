import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick = {props.click}>I am {props.name} with a  {props.age} cm dick!</p>
            <p>{props.children}</p>
            <input type = "text" onChange={props.change} value = {props.name}></input>
        </div>
    )
    //return <p></p>
}

export default person;