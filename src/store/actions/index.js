import * as api from '../../api/index';

import {
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER
    } from '../types'


    /////Posts/////

export const getPosts = (homePosts,page,order,limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homePosts,page,order,limit)
})

    /////Users/////

export const addNewsLetter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsLetter(data)
})

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER,
    payload: {
        newsletter: false,
        email: []
    }
})