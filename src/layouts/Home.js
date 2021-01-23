import React, { useEffect, useState } from 'react'
import Blogs from '../components/Blogs'
import Nav from './Nav'
import Footer from './Footer'
import axios from "axios";


const Home = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        // axios.get('https://dummyapi.io/data/api/post', { headers: { 'app-id': '600a381e88616a762eac328a' } })
        axios.get('http://localhost:8000/blog/')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setBlog(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])
    localStorage.setItem('All-Post', JSON.stringify(blog))
    return (
        <div style={{ marginTop: 50 }}>
            {blog.map(item => <Blogs key={item.id} item={item} />)}
            {/* <img src={require('../assets/images/img.png')} alt="ok" /> */}
        </div>
    )
}

export default Home
