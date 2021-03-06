import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/Blogs.css'
import BlogCard from './BlogCard'

const Blogs = (props) => {
    const path = `/blog/${props.item.slug}`;
    return (
        <div className="blog-container">
            <div className="blog-wrapper">
                <ul className='blog-items'>
                    <BlogCard
                        path={path}
                        src={props.item.cover_image}
                        text={props.item.title}
                        id={props.item.id}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Blogs
