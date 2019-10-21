import React, {Component} from 'react';
import './App.css';

function UserProfile(props) {
  return <div>
    <UserHeading user={props.user}/>
  </div>
};

function UserHeading(props) {
  return <div>
    <UserCard user={props.user}/>
  </div>
};

function UserCard(props) {
  return <div>
    <UserName user={props.user}/>
  </div>
};

function UserName(props) {
  return <div>
    <div>{props.user.name}</div>
    <div>{props.user.age}</div>
  </div>
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "Gina",
        age: 26,

      }
    };
  }
  render () {
    return (
      <div className="App">
        <UserProfile user={this.state.user}/>
      </div>
    );
  }
};

export default App;
