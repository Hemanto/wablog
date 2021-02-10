import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Blogs.css'
import Read from '../assets/read.svg'
import UnRead from '../assets/unread.svg'
import { useSelector, useDispatch } from "react-redux";
import { readLater } from "../store/actions/Action";


function BlogCard(props) {
    const [click, setclick] = useState(false);
    const FetchAPI = useSelector(state => state.FetchAPI)

    const [bookMark, setBookMark] = useState(false)
    const ids = props.id
    var readL = false;
    const dispatch = useDispatch()

    const toggleIcon = (id) => {
        setBookMark(!bookMark);
        setclick(!click);
        const index = FetchAPI.post.find((item) => item.id === ids)
        console.log(index);
        dispatch(readLater(index))
    }
    return (
        <div>
            <li className='blog-list'>
                <Link className="blog-link" to={props.path}>
                    <figure className="blog-image-wrap">
                        <img src={'http://localhost:8000' + props.src} alt="Blog Image" className="blog-image" />
                    </figure>
                    <div className="blog-info">
                        <h5 className="blog-text">{props.text}</h5>
                    </div>
                </Link>
                <div className="blog-btn">
                    <Link to='' target='' onClick={(ids) => toggleIcon(ids)}>
                        <p>{props.id}</p>
                        {/* <img className='icon-img' src={(click || readL) ? Read : UnRead} alt="" /> */}
                        {bookMark ? <img className='icon-img' src={Read} alt="" /> : <img className='icon-img' src={UnRead}></img>}
                    </Link>
                </div>
            </li>
        </div>
    )
}

export default BlogCard
