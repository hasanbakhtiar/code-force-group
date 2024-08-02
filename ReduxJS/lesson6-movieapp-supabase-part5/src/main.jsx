import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import App from './App'
import configureStore from './tools/store/configureStore';
import { Provider } from 'react-redux';
import supabase from './utils/supabase';
import AddMovie from './auth/dashboard/AddMovie';
import { movieAddAction, movieSetMovie } from './tools/actions/movieAction';


const store = configureStore();

const {error,data} = await supabase.from('movie-codeforce').select();
console.log(data);

store.dispatch(movieSetMovie(data))



console.log(store.getState());




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
