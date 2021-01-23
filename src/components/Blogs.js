import React from 'react'
import { Link } from "react-router-dom";
import './Styles/Blogs.css'
import BlogCard from './BlogCard'

const Blogs = (props) => {
    const path = `/details/${props.item.id}`;
    return (
        <div className="blog-container">
            <div className="blog-wrapper">
                <ul className='blog-items'>
                    <img src={props.item.cover_image} alt="ok
                    " />
                    {/* <img src={props.item.image} alt="img" width='400' />
                        <h2>{props.item.text}</h2>
                        <p>{props.item.published}</p>

                    {/* <BlogCard
                        path={path}
                        src={props.item.image}
                        text={props.item.text}
                    /> */}
                </ul>
            </div>
        </div>
    )
}

export default Blogs
