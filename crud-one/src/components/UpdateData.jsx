import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const UpdateData = () => {

    const { register, handleSubmit, setValue } = useForm()
    const navigate = useNavigate()
    const { clientId } = useParams();

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/client/${clientId}`);
            const result = response.data;
            setValue('id', result.id);
            setValue('client_Name', result.client_Name);
            setValue('company_Name', result.company_Name);
            setValue('email', result.email);
            setValue('contact', result.contact);
            setValue('role', result.role);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getData()
    }, [clientId])

    const saveData = async (data) => {
        try {
            await axios.put(`http://localhost:3000/client/${clientId}`, data);
            alert('Data is Updated'); navigate('/clientdetails');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div>
            <section className="h-100 h-custom main-section">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                    className="w-100 clg-img" 
                                    alt="Sample photo" />
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                    <form className="px-md-2" onSubmit={handleSubmit(saveData)}>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("client_Name")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Name</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("company_Name")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Name</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("email")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Name</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="number" id="form3Example1q" className="form-control" {...register("contact")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Contact</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("role")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Role</label>
                                        </div>

                                        <button type='submit'
                                            className="btn btn-success btn-lg mb-1"
                                        >Update</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpdateData