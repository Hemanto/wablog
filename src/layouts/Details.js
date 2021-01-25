import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/BlogDetails.css'
import { useSelector, useDispatch } from "react-redux";
const Details = () => {
    // const [allpost, setAllpost] = useState(JSON.parse(localStorage.getItem('All-Post')) || [])
    const state = useSelector(state => state.FetchAPI)
    const [allpost, setAllpost] = useState(state.post)
    const { slug } = useParams()
    console.log(allpost);
    const index = allpost.find((item) => item.slug === slug)
    return (
        <div className='details'>
            <h1>{index.title}</h1>
            <h4>{index.intro}</h4>
            <img src={index.cover_image} alt={index.Image_Credit} />
            <p>{index.category},{index.subcategory}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: index.body
                }}></div>

        </div>

    )
}

export default Details
