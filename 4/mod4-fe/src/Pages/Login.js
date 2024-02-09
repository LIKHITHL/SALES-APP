import React from 'react'

const Login = () => {
    return (
        <div>
            <p className='fs-1 fw-bold text-center mt-5'>Login</p>
            <div className='container shadow p-2'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-muted m-1">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-5">
                    <label for="exampleFormControlInput1" className="form-label text-muted m-1"> Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-secondary" type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login