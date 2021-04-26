import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import Count from './components/Count'
import Control from './components/Control';

function App() {

  // //A reducer function must have two parameters
  // //state, action
  // const reducer = (state = {}, action) => {
  //   if (action.type === 'A') {
  //     return { ...state, A: "I'm A" }
  //   }
  //   if (action.type === 'B') {
  //     return { ...state, B: "I'm B" }
  //   }

  //   return state;
  // }

  // const store = createStore(reducer);

  // store.subscribe(() => {
  //   console.log(store.getState().A);
  // })
  // store.subscribe(() => {
  //   console.log(store.getState().B);
  // })

  // store.dispatch({ type: "B" });
  // store.dispatch({ type: "Something" });
  // store.dispatch({ type: "A" });
  // store.dispatch({ type: "Something" });

  return (
    <div className="App">
      <h1>Explore redux</h1>
      <Count />
      <Control />
    </div>
  );
}

export default App;

//Store - store will all of our application data/state
//Reducer - A function who returns a specific amount of data or state
//Actions - event occurs -> {type: 'Something' payload: '}
//Dispatch - Action dispatch to the reduced
//Subscriber

//#redux process
//1. create a reducer.
//2. create store with the help of reducer.
//3. Now we can subscribe
//dispatch(action)

//React will be responsible only view layers
//Redux will be responsible only data layer
//React-Redux
