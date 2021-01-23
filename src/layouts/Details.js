import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/BlogDetails.css'
const Details = () => {
    const [allpost, setAllpost] = useState(JSON.parse(localStorage.getItem('All-Post')) || [])
    const { title } = useParams()
    const index = allpost.find((item) => item.title == title)
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
