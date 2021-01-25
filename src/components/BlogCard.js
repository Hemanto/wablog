import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Blogs.css'
import Read from '../assets/read.svg'
import UnRead from '../assets/unread.svg'


function BlogCard(props) {
    const [click, setclick] = useState(false);
    const toggleIcon = () => {
        setclick(!click);
    }
    return (
        <div>
            <li className='blog-list'>
                <Link className="blog-link" to={props.path}>
                    <figure className="blog-image-wrap">
                        <img src={props.src} alt="Blog Image" className="blog-image" />
                    </figure>
                    <div className="blog-info">
                        <h5 className="blog-text">{props.text}</h5>
                    </div>
                </Link>
                <div className="blog-btn">
                    <Link to='' target='' onClick={toggleIcon}>
                        {/* <i className={click ? "fa fa-calendar-times-o" : 'fa fa-calendar-check-o'}></i> */}
                        <img  className='icon-img' src={click ? Read : UnRead} alt=""/>
                        
                        {/* <button>Read know</button> */}
                    </Link>
                </div>
            </li>
        </div>
    )
}

export default BlogCard
