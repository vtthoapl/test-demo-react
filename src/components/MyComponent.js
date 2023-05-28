//class component
// function component

import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';
import { useState } from 'react';
/* class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: 'vivian', age: '18' },
      { id: 2, name: 'elian', age: '20' },
      { id: 3, name: 'wilskman', age: '16' },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUser:[userObj, ...this.state.listUser]
    })
  };
  handleDeleteUser = (userId)=>{
    let listUserClone = [...this.state.listUser]
    listUserClone = listUserClone.filter( item=> item.id !== userId ) //* dung filter de loc tat ca cac phan tu da thoa man dieu kien, la khong trung voi user.id
    this.setState({
      listUser: listUserClone
    })
  }
 
} */
const MyComponent = (props) => {
 
  const [listUser, setListUser] = useState([
    { id: 1, name: 'vivian', age: '18' },
    { id: 2, name: 'elian', age: '20' },
    { id: 3, name: 'wilskman', age: '16' },
  ])

  const handleAddNewtUser = (userObj) =>{
   setListUser([userObj, ...listUser])
  }
  const handleDeleteUser = (userId)=>{
    let listUserClone = listUser
        listUserClone.filter(item=>item.id !== userId)
        setListUser(listUserClone)
  }
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewtUser} />
        <br />
        <br />
        <DisplayInfor
          listUser={listUser}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
