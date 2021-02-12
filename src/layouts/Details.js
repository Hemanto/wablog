import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/BlogDetails.css'
import { useSelector, useDispatch } from "react-redux";
import Login from './Login';


const Details = () => {
    const [premium, setPremium] = useState(false)
    const [index, setIndex] = useState({})
    const state = useSelector(state => state.FetchAPI)
    const Authentication = useSelector(state => state.Authentication)
    // const [allpost, setAllpost] = useState(state.post)
    const { slug } = useParams()
    // const index = allpost.find((item) => item.slug === slug)
    console.log('index', index);
    console.log(Authentication.authenticated);
    useEffect(() => {
        const post = state.post.find((item) => item.slug === slug)
        setIndex(post)

    }, [state.post])
    if (index && Authentication) {

        if (index.premium) {
            return (
                <>
                    {Authentication.authenticated ? <div className='details'>
                        <h1>{index.title}</h1>
                        <h4>{index.intro}</h4>
                        <img src={'http://localhost:8000' + index.cover_image} alt={index.Image_Credit} />
                        <p>{index.category},{index.subcategory}</p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: index.body
                            }}>
                        </div>
                    </div> : <>
                            <div className='details'>
                                <h1>{index.title}</h1>
                                <h4>{index.intro}</h4>
                                <img src={'http://localhost:8000' + index.cover_image} alt={index.Image_Credit} />
                            </div>
                            < Login />
                        </>}

                </>
            )
        } else {
            return (
                <div className='details'>
                    <h1>{index.title}</h1>
                    <h4>{index.intro}</h4>
                    <img src={'http://localhost:8000' + index.cover_image} alt={index.Image_Credit} />
                    <p>{index.category},{index.subcategory}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: index.body
                        }}>
                    </div>
                </div>

            )
        }

    }
    // return (
    //     <div className='details'>

    //             <h1>{index.title}</h1>
    //             <h4>{index.intro}</h4>
    //             <img src={index.cover_image} alt={index.Image_Credit} />
    //             <p>{index.category},{index.subcategory}</p>
    //             <div
    //                 dangerouslySetInnerHTML={{
    //                     __html: index.body
    //                 }}>
    //             </div>



    //     </div>

    // )
}

export default Details
