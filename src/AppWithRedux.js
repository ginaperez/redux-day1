import React, {Component} from 'react';
// import store from and SET_STUDENTS from the store.js
import store, {SET_STUDENTS} from './store';
import './App.css';

function UserProfile(props) {
  return <div>
    <UserHeading />
  </div>
};

function UserHeading(props) {
  return <div>
    <UserCard />
  </div>
};

function UserCard(props) {
  return <div>
    <UserName />
  </div>
};

class UserName extends Component {
    constructor(props) {
        super(props);
        // to get the state values from the store, call the method getState() => user: {name: gina, age: 26}
     
        this.state = {
            store: store.getState(),
            name: "",
            age: ""
        };
        // bind update student so we can read local state values
        this.updateStudent = this.updateStudent.bind(this);
    }

componentDidMount() {
    // subscribe to the redux store, this allows every subscribed component to update as soon as a dispatch function runs and the global state updates
    store.subscribe(() => {
        // just get the state again after subscription method runs
        this.setState({
            store: store.getState()
        });
    });
}

updateStudent() {
    // dispatch an action to the reducer after both the names and age property are updated in local state
    store.dispatch({
        type: SET_STUDENTS,
        payload: {name: this.state.name, age: this.state.age}
    });
}

render() {
    const {user} = this.state.store;
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <input onChange={e => this.setState({name: e.target.value})} />
            <input onChange={e => this.setState({age: e.target.value})} />
            <button onClick={this.updateStudent}>Update User</button>
        </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
  render () {
    return (
      <div className="App">
        <UserProfile />
      </div>
    );
  }
};

export default App;