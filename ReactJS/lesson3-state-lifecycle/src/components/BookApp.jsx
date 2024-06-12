import React, { Component } from 'react'

 class BookApp extends Component {
    constructor() {
        super();
        // this.changeBook = this.changeBook.bind(this);
        this.state = {
            img: "https://unimall.az/images/detailed/232/b3494574d84cf5cb83036769e26e32d4.jpg",
            title: "Ag Zambagalr Olkesi",
            pageCount: 180
        }
    }

    changeBook=()=>{
        this.setState({
            img: "https://almabooks.com/wp-content/uploads/2016/10/adventures-of-Sherlock-Holmes.jpg",
            title: "Sherlock Holmes Story",
            pageCount: 700
        })
    }


    render() {
        return (
            <div className='container mt-5'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.state.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.pageCount} pages</p>
                        <button onClick={this.changeBook} className="btn btn-warning">Next book</button>
                    </div>
                </div>

            </div>
        )
    }

}

export default BookApp