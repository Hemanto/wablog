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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [state, setstate] = useState({
        email: "",
        password: ""
    })

    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const login = () => {
        // axios hit
        // access, refresh
        //
        // const timeout = 2*24*3600*1000
        // setTimeout(() => {
        // relog()

        // }, timeout);
        // cpnst relog =()=> {
        //axios hit refresh tocken
        // change access token and refresh token in storage
        // }
        // axios.post('http://localhost:9000/api/v1/userAPI/login/', {
        //     "username": state.email,
        //     "password": state.password
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        axios.get('http://localhost:9000/api/v1/userAPI/logout/').then(res => {
            console.log(res, 'here')
        }).catch(
            err => {
                console.log(err, 'here')
            }
        )
        console.log(state)
    }

    return (
        <div style={{ margin: 50 }}>
            <input type='email' id='email' placeholder='username' value={state.email} name='email' onChange={e => handelChange(e)} /> <br /><br />
            <input type='password' id='password' placeholder='password' name='password' value={state.password} onChange={e => handelChange(e)} /> <br />
            <button onClick={login}>Login</button>
            {/* <button onClick={login}>login</button> */}


            <Link to='/Sign' className="Sign-i">
                <button style={{ margin: 10 }}>Sign In</button>
            </Link>



        </div>
    )
}

// 2day



// 


export default Login
