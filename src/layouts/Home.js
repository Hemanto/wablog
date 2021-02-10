import React, { useEffect, useState } from 'react'
import Blogs from '../components/Blogs'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { valueUpdate } from "../store/actions/Action";



const Home = () => {
    const [blog, setBlog] = useState([])
    const state = useSelector(state => state.FetchAPI)
    // console.log('print', state);
    const dispatch = useDispatch()
    useEffect(() => {
        const checklocal = JSON.parse(localStorage.getItem('All-Post'))
        console.log(checklocal);
        try {
            if (state) {
                axios.get('http://localhost:8000/api/v1/blogApi/')
                    .then(function (response) {
                        setBlog(response.data)
                        dispatch(valueUpdate(response.data))
                        //console.log(setBlog);
                    })
                    .catch(function (error) {
                        console.log('here', error);
                    })
                localStorage.setItem('All-Post', JSON.stringify(blog));
            } else {
                setBlog(checklocal)
            }
        } catch (error) {
            console.log(error);
        }

    }, [])
    return (
        <>
            <button>old to new</button>
            <div style={{ marginTop: 50 }}>
                {blog.map(item => <Blogs key={item.id} item={item} />)}
            </div>
        </>
    )
}

export default Home
