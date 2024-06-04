import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Albums = () => {
	const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/albums").then(response=>{
      console.log(response)
      setUsers(response.data)
    })
  },[])
  return (
    <div className='users'>
      <h1 className='text-center my-3'>Albums</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Albums
