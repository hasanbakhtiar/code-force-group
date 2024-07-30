import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import App from './App'
import configureStore from './tools/store/configureStore';
import { movieAddAction, movieGetAction } from './tools/actions/movieAction';
import { films } from './tools/mockdata/films';
import { Provider } from 'react-redux';
import supabase from './utils/supabase';


const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });



async function senData() {
  const { data } = await supabase.from('movie-codeforce').select()
  store.dispatch(movieGetAction(data));
}

senData();








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
