import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Comments = () => {
	const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then(response=>{
      console.log(response)
      setUsers(response.data)
    })
  },[])
  return (
    <div className='users'>
      <h1 className='text-center my-3'>Comments</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>PostID</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
            <td>{item.postId}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Comments
