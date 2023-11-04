// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(
    //     ()=>{
    //         fetch('https://api.github.com/users/codexharoon').then(res => res.json()).then(data => {
    //             setData(data)
    //             console.log(data)
    //         }).catch(err => console.log(err))
    //     },
    //     []
    // )

  return (
    <>
        <div className='bg-orange-600 text-center text-3xl text-white p-4'>
            Github

            <div className='bg-orange-500 p-4 m-4 rounded-lg flex'>
                <img className='rounded-full align-middle' src={data.avatar_url} alt="codexharoon github profile pic" width={300} />
                <div className='bg-orange-400 p-4 m-4 rounded-3xl'>
                    Bio : {data.bio}
                </div>
            </div>

        </div>
    </>
  )
}

export default Github;

export const githubAPILoader = async ()=>{
    const res = await fetch('https://api.github.com/users/codexharoon');
    const d = await res.json();
    return d;
}

