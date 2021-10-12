import React, {useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';

import { getPosts } from '../../store/actions'

import { Spinner, Button } from 'react-bootstrap';

const HomePosts = () => {

    const homePosts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    

    useEffect(()=>{
        dispatch(getPosts({},1,"desc",6))
    },[dispatch])

    const loadMorePosts = () => {
        const pageNumber = homePosts.page + 1;
        setLoading(true);
        dispatch(getPosts(homePosts,pageNumber,"desc",6)).then(()=>{setLoading(false)});
    }


    return(
        <>
            {isLoading ? 
                <div style={{ textAlign:'center'}}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                :null}
            {!homePosts.end ?
            <Button
                variant="outline-dark"
                onClick={() => loadMorePosts() }
            >Load More Posts</Button>
            :null}

        </>
    );
}

export default HomePosts;