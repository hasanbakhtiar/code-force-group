import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import photo from './img/a.jpg';

class App extends Component{
    render(){
        return <>
        <h1>Hello React</h1>
        <img width={300} src={photo} alt="" />
        </>
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));