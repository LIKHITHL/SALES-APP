import React from 'react'
import Table from 'react-bootstrap/Table';

const Top5Sales = () => {
    return (
        <div className='container shadow p-2 mt-5'>
            <p className='fs-1 fw-bold text-center mt-3'>Top 5 Sales</p>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sales Id:</th>
                        <th> Product Name </th>
                        <th> Quantity </th>
                        <th> Sale Amount </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold'>1</td>
                        <td>S1212</td>
                        <td>Laptop</td>
                        <td>2</td>
                        <td>90000</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>2</td>
                        <td>S1423</td>
                        <td>Mobile</td>
                        <td>5</td>
                        <td>85000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Top5Sales