import React, {useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import Masonry from 'react-masonry-css'
import Moment from 'react-moment';
import { Spinner, Button } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';

import { getPosts } from '../../store/actions'






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
            
            <Masonry
                breakpointCols={{default:3, 800:2, 400:1}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                { homePosts.posts ? 
                    homePosts.posts.map((item)=>(
                    <div key={item.id}>
                        <img 
                            style={{width:'100%', height:'200px '}}
                            src={item.image}
                        />
                        <div className="author">
                            <span>{item.author} -</span>
                            <Moment format="DD MMMM">
                                {item.createdAt}
                            </Moment>
                        </div>
                        <div className="content">
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="excerpt">{item.excerpt}</div>
                            <LinkContainer
                                to={`article/${item.id}`}
                                className="mt-2">
                                <Button variant='light'>Read More</Button>
                            </LinkContainer>
                        </div>
                    </div>
                )):null}
            </Masonry>

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