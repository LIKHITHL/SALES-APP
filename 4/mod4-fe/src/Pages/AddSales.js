import React from 'react'

const AddSales = () => {
  return (
    <div>
      <p className='fs-1 fw-bold text-center mt-5'>ADD SALES ENTRY</p>
      <div className='container shadow p-2'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-muted m-1">Product Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-muted m-1"> Quantity</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-5">
          <label for="exampleFormControlInput1" className="form-label text-muted m-1">Amount</label>
          <input type="number" className="form-control" />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-secondary" type="button">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default AddSales