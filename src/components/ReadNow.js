import React from 'react'
import BlogCard from './BlogCard'
const ReadNow = (props) => {
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

export default ReadNow
