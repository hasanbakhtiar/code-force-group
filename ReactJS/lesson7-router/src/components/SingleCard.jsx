import { useState } from "react"
import { Link } from "react-router-dom";
import slugify from "slugify";

const SingleCard = ({alldata}) => {
    const [textLength,setTextLength] = useState(20);
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img src={alldata.images[0]} height={300} style={{objectFit:"contain"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title}</h5>
                    <p className="card-text">{alldata.description.slice(0,textLength)}<span onClick={()=>{setTextLength(alldata.description.length)}}>{textLength===alldata.description.length?"":"..."}</span></p>
                    <Link to={`/products/${slugify(alldata.title)}`} className="btn btn-dark">Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCard