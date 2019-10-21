// import createStore from redux
import {createStore} from 'redux';

//create the initial global state for our application
const initialState = {
    user: {
        name: "Gina",
        age: 26
    }
};
// set action type to a variable, this makes spelling errors less likely
// this will be destructured as it is a named export
export const SET_STUDENTS = "SET_STUDENTS";

// reducing a function is supposed to take whatever the current state is, and a value to be added to the current state and combine them to a new state value
function reducer(state = initialState, action) {
    switch(action.type){
        case SET_STUDENTS:
            // only updating the user property
            // create copy of state, add user property and set equal an object with name and age from the payload
            return {...state, user: {...action.payload }};
        default:
            return state;
    }
};

// export default the create store function with the reducer passed in, this will give us the store for our application with the exact instructions on how to update the store
export default createStore(reducer);
