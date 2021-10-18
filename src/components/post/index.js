import React, { useEffect } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import Moment from 'react-moment';
import { getPostById, clearPostById } from '../../store/actions'
import { showToast } from '../utils/tools'

import NewsLetter from '../utils/newsletter'

const PostComponent = (props) => {

    const post = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPostById(props.match.params.id))
    },[dispatch, props.match.params.id])

    useEffect(()=> {
        if(post.postById === '404'){
            showToast('ERROR', 'The page you requested is not available');
            props.history.push('/');
        }
    },[post, props.history])

    useEffect(() => {
        return () => {
            dispatch(clearPostById())
        }
    },[dispatch])

    return(
        <>
            {post.postById ?
            <div className="article_container">
                <h1>{post.postById.title}</h1>
                <div
                style = {{
                    background:`url(${post.postById.imagexl})`
                }}
                    className="image">
                </div>
                <div className="author">
                    <span>Created By {post.postById.author} - </span>
                    <Moment format="DD MMMM">
                        {post.postById.createdAt}
                    </Moment>
                </div>
                <div className="mt-3">
                    <div dangerouslySetInnerHTML={
                        {__html: post.postById.content}
                    }>
                    </div>
                </div>
            </div>
            :null}
            <NewsLetter />
        </>
    );
}

export default PostComponent;