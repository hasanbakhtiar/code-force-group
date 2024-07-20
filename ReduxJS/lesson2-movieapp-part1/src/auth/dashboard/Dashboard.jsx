import React from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const movie = useSelector(p => p.movie);
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <h1 className='my-5'>Dashboard</h1>
      <Col md="12">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Desc</th>
              <th>Active</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {movie.map(item => (
              <tr key={item.id}>
                <td>{item.row}</td>
                <td>{item.date}</td>
                <td><img src={item.img} width={70} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.desc.substring(0,10)}...</td>
                <td>{item.active?<button className='btn btn-success'>active</button>:<button className='btn btn-danger'>no active</button>}</td>
                <td><Button variant="warning">Edit</Button></td>
                <td><Button variant="danger">Del</Button></td>
              </tr>
            ))}


          </tbody>
        </Table>
      </Col>
    </div>
  )
}

export default Dashboard