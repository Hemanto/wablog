// import React, { useEffect, useState } from 'react'
// import fire from '../fire'

// const Login = () => {
//     const [user, setUser] = useState({ user: '' })
//     const authListner = () => {
//         fire.auth().onAuthStateChanged((user) => {
//             if (user) {
//                 setUser({ user })
//             }
//             else {
//                 setUser({ user: null })
//             }
//         })
//     }
//     useEffect(() => {
//         authListner()
//     }, [])

//     const [state, setstate] = useState({
//         email: '',
//         password: ''
//     })

//     const sign = (e) => {
//         e.preventDefault();
//         fire.auth().createUserWithEmailAndPassword(state.email, state.password)
//             .then((u) => {
//                 console.log(u);
//             }).catch((err) => {
//                 console.log(err);
//             })
//     }
//     const login = (e) => {
//         e.preventDefault();
//         fire.auth().loginWithEmailAndPassword(state.email, state.password)
//             .then((u) => {
//                 console.log(u);
//             }).catch((err) => {
//                 console.log(err);
//             })
//     }

//     const handelChange = (e) => {
//         setstate({ ...state, [e.target.name]: e.target.value })

//     }

//     return (
//         <div>
//             <input type='email' id='email' placeholder='username' value={state.email} name='email' onChange={handelChange} />
//             <input type='password' id='password' placeholder='password' name='password' name='password' value={state.password} onChange={handelChange} />
//             <button onClick={sign}>signin</button>
//             <button onClick={login}>login</button>
//             {user.user ? 'home' : 'login'}
//         </div>
//     )
// }

// export default Login

import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/Action'
import { loginUser } from "../config"


const Login = () => {


    const input = useRef(null)
    console.log(input)
    useEffect(() => {
        console.log("in e", input.current.value = "sam")

    }, [])
    const [state, setstate] = useState({
        username: '',
        password: ""
    })

    const dispatch = useDispatch()


    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const login = async () => {
        const user = await loginUser(state)
        dispatch(register(await user))
    }

    return (
        <div style={{ margin: 50 }}>
            <input ref={input} type='text' id='email' placeholder='username' value={state.username} name='username' onChange={e => handelChange(e)} /> <br /><br />
            <input type='password' id='password' placeholder='password' name='password' value={state.password} onChange={e => handelChange(e)} /> <br />
            <button onClick={login}>Login</button>


            <Link to='/Sign' className="Sign-i">
                <button style={{ margin: 10 }}>Sign In</button>
            </Link>



        </div>
    )
}

// 2day



// 


export default Login
