import React from 'react'
import DashbaordForm from '../../components/DashbaordForm'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { movieAddAction, movieEditAction } from '../../tools/actions/movieAction';
import slugify from 'slugify';

const EditMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {slug} = useParams();
  const movieData = useSelector(p=>p.movie);
  const findData = movieData.find(p=>slugify(p.title) === slug);
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='my-5'>Edit Movies</h1>
        <DashbaordForm editData = {findData} sendData={fd=>{
          dispatch(movieEditAction(findData.id,fd));
          navigate('/dashboard');
        }} />
    </div>
  )
}

export default EditMovie