import React, { Component } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import { products } from './data/mockdata'





class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1 className='text-center my-5'>Product list</h1>
                    <div className="row g-4">
                        {products.map(item=>{
                            return <Card photo={item.photo} title={item.title} stock ={item.stock}/>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default App