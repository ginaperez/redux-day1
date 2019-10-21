## Redux - Concept

- Student can describe the role of redux
- Student can describe the following vocab in the context of redux: Store, reducer, action, action builder, connect
- Student can describe when to use Redux

## Redux - Stores & Reducers

- Student can setup redux passing a store into a reducer
- Student can create a reducer
- Student can create and dispatch actions
- Student can inititalize default state in a reducer
- Student can update state in a reducer

<img src="https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966"/>

<img src="https://camo.githubusercontent.com/8e97d05fcc88aa498fe610522c51da15161f687b/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763522d453874384d6658732d484d416b4772446d5746654a726b53565f5f755461477531595350704d54504f305a6558314237"/>

### Goal of Redux

- To make a global state that any component can access regardless of how deeply nested in the component tree

- Prevent excessive props drilling

- Client side cache for server side data

### Store

- An object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens on the reducer level

```js
const initialState = {
    someState: {amount: 0, total: 0}
}
```

### Action:

- A plain object that represents an intention to change the state. Actions are the only way to get data in the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.

```js
{
    type: "ADD",
    payload: amount
}
```

### Reducer:

- A function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.

```js
function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD":
            return {
            ...state, 
            someState: {...state.someState, amount: action.payload}
            };
        default:
            return state;
    }
}
```

### Dispatch Function

- A function that accepts an action or an async action; it then may or may not dispatch one or more actions to the store.

```js
import store from '../store.js';

store.dispatch({payload: amount, type: "ADD"});
```

### Action Creator

- A function that creates an action

```js
myActionCreator(amount) {
    return {
        type: "ADD",
        payload: amount
    }
}
myActionCreator(200)
```