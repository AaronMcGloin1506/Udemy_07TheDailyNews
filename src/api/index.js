import axios from 'axios';

const URL_SERV = 'http://localhost:3004';

export const getPosts = async() => {
    try{
        const response = await axios.get(`${URL_SERV}/posts`);
        return {
            posts: response.data
        }
    }
    catch(error){
        throw error;
    }
}