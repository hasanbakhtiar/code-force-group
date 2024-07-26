import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import App from './App'
import configureStore from './tools/store/configureStore';
import { movieAddAction } from './tools/actions/movieAction';
import { films } from './tools/mockdata/films';
import { Provider } from 'react-redux';


const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

films.map(item => {
  store.dispatch(movieAddAction(item));
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
