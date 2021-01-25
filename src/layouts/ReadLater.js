import React from 'react'
import { useSelector } from "react-redux";
import ReadNow from '../components/ReadNow';
function ReadLater() {
    const ReadLater = useSelector(state => state.ReadLater)
    console.log('laterlist', ReadLater);
    return (
        <div>
            {ReadLater.readLaterPost.map(item => <ReadNow key={item.id} item={item} />)}
        </div>
    )
}

export default ReadLater
