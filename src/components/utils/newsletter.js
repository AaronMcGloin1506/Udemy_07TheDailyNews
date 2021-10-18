import React, { useRef, useEffect} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addNewsLetter, clearNewsletter } from '../../store/actions'

import { showToast } from '../utils/tools';

const NewsLetter = () => {

    const userData = useSelector(state => state.user)
    const dispatch = useDispatch();
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        dispatch(addNewsLetter({email:value}))
        
    }

    useEffect(()=>{
        if(userData.newsletter){
            console.log(userData.newsletter)
            if(userData.newsletter === "added"){
                showToast('SUCCESS','Thank you for subscribing !!!')
                textInput.current.value = "";
                //dispatch(clearNewsletter())
            }if(userData.newsletter === "failed"){
                showToast('ERROR', 'Email already in use');
                textInput.current.value = "";
                //dispatch(clearNewsletter())
            }
        }
    },[userData])

    // clearing newsletter when leaving the component 
    useEffect(()=>{
        return () => {
            dispatch(clearNewsletter())
        }
    },[dispatch])


    return(
        <>
            <div className="newsletter_container">
                <h1>Join Our Newsletter</h1>
                <div className="form">
                    <Form onSubmit={handleSubmit} className="mt-4">
                        <Form.Group>
                            <Form.Control 
                                type="text"
                                placeholder="Example: your@gmail.com"
                                name="email"
                                ref={textInput}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add me to the list
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NewsLetter;