import React from 'react'
import { useDispatch } from 'react-redux'
function users() {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getAllUsers())
    },[])
  return (
    <div>
        <h1>users</h1>
    </div>
  )
}

export default users