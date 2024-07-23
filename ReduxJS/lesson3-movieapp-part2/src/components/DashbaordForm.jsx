import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

const DashbaordForm = ({sendData}) => {

    const [row, setRow] = useState(null);
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [desc, setDesc] = useState(null);
    const [date, setDate] = useState(null);
    const [active, setActive] = useState(true);
    // state end

    
    const formSubmited = e => {
        e.preventDefault();
        sendData({
            row,img,title,price,date,active,desc
        })
    }
    console.log(active);

    return (
        <Col md={5}>
            <form onSubmit={formSubmited} >
                <div className="mb-3">
                    <label className="form-label">Row</label>
                    <input  type="number" className="form-control" onChange={e => setRow(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input  type="text" className="form-control" onChange={e => setImg(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input  type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input  type="number" className="form-control" onChange={e => setPrice(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input  type="text" className="form-control" onChange={e => setDesc(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input  type="date" className="form-control" onChange={e => setDate(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <input className="form-check-input  ms-2" type="checkbox" checked={active} onChange={e=>setActive(e.target.checked)} />
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </Col>
    )
}

export default DashbaordForm