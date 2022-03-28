import { combineReducers } from 'redux';

const combinedReducers = (injectedReducers = {}) => combineReducers({
    ...injectedReducers
});

export default combinedReducers;
