import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteData = () => {
  const navigate = useNavigate()
  const { clientId } = useParams();

  const delcli = async () => {
    try {
      await axios.delete(`http://localhost:3000/client${clientId}`)
      alert("data deleted succesfully")
      navigate('/clientdetails')
    } catch (e) {
      console.log("Data is not deleted", e)
    }
  }




  return (

    <div>
      <div className='w-50 mx-auto bg-warning mt-5 rounded-4'>
        <div className='p-5'>
          <h1>Do you want to remove the client Details from the back end?</h1>
          <div className='mt-5 text-center'>
            <button className='btn btn-danger fs-3 px-5 fw-bold me-3' onClick={delcli}>Yes</button>
            <button className='btn btn-success fs-3 px-5 fw-bold'>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteData