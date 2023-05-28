import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss';

//Stateless: there is no state > < statefull:

const DisplayInfor = (props) => {
  const { listUser } = props; //* const listUsers = this.props.listUsers
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  //destructuring array/object
  //props : properties
  //componant = template jsx(Html) + logic js
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser); //toggle
  };
  console.log('render')
  useEffect(
    ()=>{
      if (listUser.length === 5) {
        alert('ur list user is 5')
      }
    console.log('call me userEffect')
  }, [listUser] //[] giup ham hieu la chi chay 1 lan
  )

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? 'Hide List User' : 'Show List User'}
        </span>
        <hr />
        <hr />
      </div>
      {isShowHideListUser && (
        //? need to have key (to recognize which one), don't take index as the key because it will cause bug in the future
        <>
          {listUser.map((user, index) => {
            return (
              <div className={+user.age > 18 ? 'red' : 'green'} key={user.id}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>Address: {user.address}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
