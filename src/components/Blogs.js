import React from 'react'
import Img from '../assets/images/img-9.jpg'

const Blogs = (props) => {
    return (
        <div>
            <img src={props.item.author.image.url} alt="img" />
            <img src={Img} alt="" />
            <h2>{props.item.title}</h2>
            <p>{props.item.published}</p>
            {/* <div
                dangerouslySetInnerHTML={{
                    __html: props.item.content
                }}></div> */}
            {/* <p>{props.item.content} </p> */}
        </div>
    )
}

export default Blogs
