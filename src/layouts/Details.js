import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = (Match) => {
    const [allpost, setAllpost] = useState(JSON.parse(localStorage.getItem('All-Post')) || [])
    const { id } = useParams()
    const index = allpost.find((item) => item.id === id)
    console.log(index);
    return (
        <div>
            Deatils page
        </div>
        // if (data.id)
    )
}

export default Details
