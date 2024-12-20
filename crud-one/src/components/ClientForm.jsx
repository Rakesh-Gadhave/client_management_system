import React from 'react'
import './ClientForm.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const ClientForm = () => {
    const {register, handleSubmit, reset} = useForm()

    const submitForm = async(data) => {
        await axios.post('http://localhost:3000/client', data)
        alert("Data submitted successfully")
        reset()
    }

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

                                    <form className="px-md-2" onSubmit={handleSubmit(submitForm)}>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("client_Name")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Name</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("company_Name")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Company Name</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="email" id="form3Example1q" className="form-control" {...register("email")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Email</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="number" id="form3Example1q" className="form-control" {...register("contact")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Contact</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="text" id="form3Example1q" className="form-control" {...register("role")} required/>
                                            <label className="form-label" htmlFor="form3Example1q">Role</label>
                                        </div>

                                        <input type="submit"
                                         data-mdb-button-init data-mdb-ripple-init 
                                         className="btn btn-success btn-lg mb-1"
                                        />

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

export default ClientForm