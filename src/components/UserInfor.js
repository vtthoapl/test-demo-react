import React from 'react';

class UserInfor extends React.Component {
  state = {
    name: 'Jose',
    address: 'Finland',
    age: 26,
  };
  //JSX: cho phep viet Js ben trong HTML
  handleClick = (event) => {
    console.log('>>click me my button');
    //merge State => only react class
    this.setState({
      name: 'Vivian',
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  /* handleOnMouseOver = (event) => {
        console.log(event.pageX);
      }; */
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} & I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          click me
        </button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
        I'm a child
      </div>
    );
  }
}

export default UserInfor;
