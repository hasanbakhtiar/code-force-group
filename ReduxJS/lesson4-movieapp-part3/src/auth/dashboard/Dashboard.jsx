import React from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { movieDelAction } from '../../tools/actions/movieAction';
import { LinkContainer } from 'react-router-bootstrap';
import slugify from 'slugify';

const Dashboard = () => {
  const movie = useSelector(p => p.movie);
  const dispatch = useDispatch();
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <h1 className='my-5'>Dashboard</h1>
      <Col md="12">
      <Link to="/dashboard/addmovie" className="btn btn-success my-3">Add</Link>
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
                <td><LinkContainer to={`/dashboard/editmovie/${slugify(item.title)}`}><Button variant="warning">Edit</Button></LinkContainer></td>
                <td><Button variant="danger" onClick={()=>{dispatch(movieDelAction({id:item.id}))}}>Del</Button></td>
              </tr>
            ))}


          </tbody>
        </Table>
      </Col>
    </div>
  )
}

export default Dashboard