import React from 'react'
import Img from '../assets/images/img-9.jpg'
import { Link } from "react-router-dom";

const Blogs = (props) => {
    return (
        <Link to={`/details/${props.item.id}`}>
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
        </Link >
    )
}

export default Blogs
