import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

const DashbaordForm = ({sendData,editData}) => {

    const [row, setRow] = useState(editData?editData.row:"");
    const [img, setImg] = useState(editData?editData.img:"");
    const [title, setTitle] = useState(editData?editData.title:"");
    const [price, setPrice] = useState(editData?editData.price:"");
    const [desc, setDesc] = useState(editData?editData.desc:"");
    const [date, setDate] = useState(editData?editData.date:"");
    const [active, setActive] = useState(editData?editData.active:true);
    // state end

    
    const formSubmited = e => {
        e.preventDefault();
        sendData({
            row,img,title,price,date,active,desc
        })
    }

    return (
        <Col md={5}>
            <form onSubmit={formSubmited} >
                <div className="mb-3">
                    <label className="form-label">Row</label>
                    <input value={row} type="number" className="form-control" onChange={e => setRow(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input  value={img} type="text" className="form-control" onChange={e => setImg(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input  value={title} type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input value={price} type="number" className="form-control" onChange={e => setPrice(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input  value={desc} type="text" className="form-control" onChange={e => setDesc(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input value={date} type="date" className="form-control" onChange={e => setDate(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <input className="form-check-input  ms-2" type="checkbox" checked={active} onChange={e=>setActive(e.target.checked)} />
                </div>

                <button type="submit" className="btn btn-primary">{editData?"Update":"Add"}</button>
            </form>
        </Col>
    )
}

export default DashbaordForm