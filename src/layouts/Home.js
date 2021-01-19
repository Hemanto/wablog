import React, { useState } from 'react'
import Blogs from '../components/Blogs'
import Nav from './Nav'
import Footer from './Footer'
import axios from "axios";

const Home = () => {
    const [blog, setBlog] = useState([])

    axios.get('https://www.googleapis.com/blogger/v3/blogs/3213900/posts?key=AIzaSyCbvs4V0iq625mBvxRFHPXJjlql6EGiyW0')
        .then(function (response) {
            // handle success
            console.log(response);
            setBlog(response.data.items)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


    return (
        <div>
            <Nav />
            {blog.map(item => <Blogs key={item.id} item={item} />)}

            <Footer />
        </div>
    )
}

export default Home
