import { createStore } from 'redux';
import rootReducers from './reducer'; // Import your root reducer

const store = createStore(rootReducers); // Create Redux store with your root reducer

export default store;