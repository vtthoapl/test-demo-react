import React from 'react';
class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const {listUser} = this.props;
    console.log(listUser)
    //props : properties
    return (
      <div>
        {listUser.map((user)=>{
          //? need to have key (to recognize which one), don't take index as the key because it will cause bug in the future
          return <div key={user.id}>
            <div>My name is {user.name}</div>
            <div>My age is {user.age}</div>
            <hr/>
          </div>
        })}
      </div>
    );
  }
}
export default DisplayInfor;
