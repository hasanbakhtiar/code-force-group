import React from 'react'
import DashbaordForm from '../../components/DashbaordForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { movieAddAction } from '../../tools/actions/movieAction';

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='my-5'>Add Movies</h1>
        <DashbaordForm sendData={fd=>{
          dispatch(movieAddAction(fd));
          navigate('/dashboard');
        }} />
    </div>
  )
}

export default AddMovie