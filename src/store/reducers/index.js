import { combineReducers } from 'redux';
import user from './userReducer';
import posts  from './postsReducer';

const appReducers = combineReducers({
    posts,
    user
})

export default appReducers; 