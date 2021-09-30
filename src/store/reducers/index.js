import { combineReducers } from 'redux';
import user from './postsReducer';
import posts  from './userReducer';

const appReducers = combineReducers({
    posts,
    user
})

export default appReducers; 