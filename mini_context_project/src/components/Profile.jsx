import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {data} = useContext(UserContext);

    if(!data){
        return <h1>Please Login</h1>
    }
    
  return (
    <div>
        <h1>Profile</h1>
        <p>{data.username}</p>
        <p>{data.password}</p>
    </div>
  )
}

export default Profile