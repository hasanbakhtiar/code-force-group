import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }


    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.decrement}>-</button>
                <span className='mx-3 text-danger'>{this.state.count}</span>
                <button className='btn btn-success' onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter