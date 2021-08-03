# react-bvhfzz

# Redux Data Flow and React Component Life Cycle

Redux store

step 1: 

first create store folder. then create index.js 

1.store is the place we save the state

`import { createStore } from 'redux';

const store = createStore();`


step 2:

`import { createStore } from 'redux';

const counterReducer=(state,action)=>{

}

const store = createStore();`


step 3: 

`import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
 `

step 4: 

`import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
`


# concept

//Store - Globalized state

//Action - Increment

//Reducer -

//Dispatch



[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-bvhfzz)