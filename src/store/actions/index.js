import * as api from '../../api/index';

import {
    GET_POSTS
    } from '../types'

export const getPosts = () => ({
    type: GET_POSTS,
    payload: api.getPosts()
})