import axios from 'axios'

export const ENDPOINT_DEV = "http://localhost:8000/"


export const loginUser = async (data) => {
    const res = await axios.post(ENDPOINT_DEV + 'rest-auth/login/', data)
    const user = await getUser(await res.data.key)
    return { user: await user, token: await res.data.key };
}

const getUser = async (token) => {
    const res = await axios.post(ENDPOINT_DEV + 'api/userAPI/get_user/', { token: token })
    return await res.data
}
export const logout = async () => {
    const res = await axios.post(ENDPOINT_DEV + 'rest-auth/logout/')
    return (res.statusText === "OK")
}
export const registerUser = async (data) => {
    const res = await axios.post(ENDPOINT_DEV + 'rest-auth/registration/', data)
    const user = await getUser(await res.data.key)
    return { user: await user, token: await res.data.key };
}












//=====================================================================================

// client id
//853537081654-bk8kq575f0soqnq71ja0e7m7d4gr52s9.apps.googleusercontent.com
//client secret
//tYnHvPicBLXr0EXIfN-Me6XK

//https://www.googleapis.com/blogger/v3/blogs/3213900/posts?key=AIzaSyCbvs4V0iq625mBvxRFHPXJjlql6EGiyW0

//https://www.googleapis.com/blogger/v3/blogs/3213900?key=AIzaSyCbvs4V0iq625mBvxRFHPXJjlql6EGiyW0



//https://jsonplaceholder.typicode.com/posts

//https://jsonplaceholder.typicode.com/

//https://dummyapi.io/explorer


//https://dummyapi.io/data/api/user/app-id=600a381e88616a762eac328a

//https://dummyapi.io/data/api/user/600a381e88616a762eac328a


// http://localhost:8000/rest-auth/registration/

// http://localhost:8000/rest-auth/user/

// http://localhost:8000/rest-auth/login/

// http://localhost:8000/rest-auth/logout/