import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateData from './UpdateData';

const ClientDetails = () => {
    const [saveData, setSaveData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/client')
                const result = response.data
                setSaveData(result)
            } catch (e) {
                console.log("error ", e)
            }
        }
        getData();
    }, [])

    const sendDataUpdate = (clientId) => {
        navigate(`/updatedata/${clientId}`)
    }

    const sendDataDelete = (clientId) => {
        navigate(`/deletedata/${clientId}`)
    }

    return (
        <div>
            <h1 className='mt-5'>Client Details</h1>
            <table className='table w-75 mt-5 bg-dark mx-auto
            '>
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Client id</th>
                        <th>Client Name</th>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        saveData.map((clients, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{clients.id}</td>
                                    <td>{clients.client_Name}</td>
                                    <td>{clients.company_Name}</td>
                                    <td>{clients.email}</td>
                                    <td>{clients.contact}</td>
                                    <td>{clients.role}</td>
                                    <td>
                                        <button className='btn btn-warning me-2' onClick={() => { sendDataUpdate(clients.id) }}>Update</button>
                                        <button className='btn btn-danger' onClick={() => { sendDataDelete(clients.id) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ClientDetails