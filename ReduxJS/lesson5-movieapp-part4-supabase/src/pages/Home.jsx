import { useState, useEffect } from 'react'
import  supabase  from '../utils/supabase'

function Home() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
  async function getTodos() {
      const { data } = await supabase.from('movie-codeforce').select()
      setMovie(data);
    }

    getTodos()
  }, [])

  return (
    <div>
    {movie.map(i=>(
      <li>{i.title}</li>
    ))}
    </div>
  )
}

export default Home