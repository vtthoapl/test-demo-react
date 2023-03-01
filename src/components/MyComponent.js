//class component
// function component

import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfor';
class MyComponent extends React.Component {
  state={
    listUser:[
      {id:1, name:'vivian', age:'10'},
      {id:2, name:'elian', age:'5'},
      {id:3, name:'wilskman', age:'36'},
    ]
  }
  render() {
    //DRY: dont repeat yourself
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
