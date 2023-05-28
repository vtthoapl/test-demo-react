import React from 'react';
import { useState } from 'react';

const AddUserInfor = (props) => {
  const [name, setName] = useState(' ');
  const [address, setAddress] = useState('Finland');
  const [age, setAge] = useState('');

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnChangeAddress = (event)=>{
    setAddress(event.target.value)
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + '-random',
      name: name,
      age: age,
      address: address
    });
  };

  return (
    <>
      My name is {name} & I'm {age}
      <button onSubmit={(event) => handleOnSubmit(event)}>click me</button>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>your address: </label>
        <input value = {address} type='text' onChange={(event)=>handleOnChangeAddress(event)}></input>
        <label>your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddUserInfor;
