import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import slugify from "slugify";
import swal from "sweetalert";
import { LangContext } from "../context/LangContact";

const SingleCard = ({alldata,rescount}) => {
    const [textLength,setTextLength] = useState(20);
    const {addItem} = useCart();
    const [lang]=  useContext(LangContext);
    return (
        <div  className={`col-12 col-sm-6 col-md-${rescount}`} >
            <div className="card" >
                <img src={alldata.images[0]} height={300} style={{objectFit:"contain"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title}</h5>
                    <p className="card-text">{alldata.description.slice(0,textLength)}<span onClick={()=>{setTextLength(alldata.description.length)}}>{textLength===alldata.description.length?"":"..."}</span></p>
                    <Link to={`/products/${slugify(alldata.title)}`} className="btn btn-dark">{lang==="az"?"Etrafli":"Read more"}</Link>
                    <button className="btn btn-warning ms-3" onClick={()=>{addItem(alldata);swal("Product was added","","success")}}>{lang==="az"?"Sebete elave et":"Add to cart"}</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCard