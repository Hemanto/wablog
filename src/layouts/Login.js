import React, { useEffect, useState } from 'react'
import fire from '../fire'

const Login = () => {
    const [user, setUser] = useState({ user: '' })

    const authListner = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser({ user })
            }
            else {
                setUser({ user: null })
            }
        })
    }
    useEffect(() => {
        authListner()
    }, [])

    const [state, setstate] = useState({
        email: '',
        password: ''
    })

    const sign = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(state.email, state.password)
            .then((u) => {
                console.log(u);
            }).catch((err) => {
                console.log(err);
            })
    }
    const login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(state.email, state.password)
            .then((u) => {
                console.log(u);
            }).catch((err) => {
                console.log(err);
            })
    }

    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })

    }

    return (
        <div>
            <input type='email' id='email' placeholder='username' value={state.email} name='email' onChange={handelChange} />
            <input type='password' id='password' placeholder='password' name='password' name='password' value={state.password} onChange={handelChange} />
            <button onClick={sign}>signin</button>
            <button onClick={login}>login</button>
            {user.user ? 'home' : 'login'}
        </div>
    )
}

export default Login
