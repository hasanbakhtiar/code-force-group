import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "Samsung S24",
            price: 3400,
            count: 1
        }
    }
    render() {
        return (
            <div className='container mt-5'>
                <ul>
                    <li>Title: {this.state.title}</li>
                    <li>Price: ${this.state.price}</li>
                    <li>Total price: ${this.state.price * this.state.count}</li>
                </ul>
                <button className='btn btn-danger'>-</button>
                <span className='mx-3'>{this.state.count}</span>
                <button className='btn btn-success' onClick={() => { this.setState({count:this.state.count + 1}) }}>+</button>
            </div>
        )
    }
}

export default App