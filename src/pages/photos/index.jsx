import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Photos = () => {
	const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
      console.log(response)
      setUsers(response.data)
    })
  },[])
  return (
    <div className='users'>
      <h1 className='text-center my-3'>Photos</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>AlbumID</th>
          <th>ID</th>
          <th>Title</th>
          <th>URL</th>
          <th>ThumbnailUrl</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
            <td>{item.albumId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.thumbnailUrl}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Photos
