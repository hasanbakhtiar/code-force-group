import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { LangContext } from '../context/LangContact';
import { ModeContext } from '../context/ModeContext';

const Header = () => {
  const { totalItems } = useCart();
  const [keyword, setKeyword] = useState(null);
  const [product] = useContext(ProductContext);
  const [lang,setLang] = useContext(LangContext);
  const [mode,setMode] = useContext(ModeContext);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">{lang==="az"?"Esas":"Main"}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">{lang==="az"?"Ana Sehife":"Home"}</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">{lang === "az"?"Haqqimizda":"About"}</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">{lang === "az"?"Mehsullar":"Products"}</NavLink>
            </li>

          </ul>
          <Link to="/cart" className="btn btn-warning position-relative">
            <BsCart3 />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>

          </Link>
          <div>

            <button type="button" className="btn btn-light ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <IoSearch />
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search product</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter product name" />
                      <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                    </div>
                    <ul className="list-group">
                      {!keyword ? "" : product.filter(p => p.description.toLowerCase().includes(keyword)).map(item => (
                        <Link   to={`/products/${slugify(item.title)}`}>
                          <li data-bs-dismiss="modal"  key={item.id} className="list-group-item"><img width={70} src={item.images[0]} alt={item.title} /><span className='ms-3'>{item.title}</span></li>
                        </Link>

                      ))}
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <button className='btn btn-light  ms-3' onClick={()=>{
            lang==="az"? setLang('en'): setLang('az');
            lang ==="az"?localStorage.setItem('lang',"en"):localStorage.setItem('lang','az');
          }}>{lang==="az"?"EN":"AZ"}</button>
          <button className='btn btn-light ms-3' onClick={()=>{
            mode==="light"?setMode('dark'):setMode('light')
            mode==="light"?localStorage.setItem('mode','dark'):localStorage.setItem('mode','light')
          }}>{mode}</button>

        </div>
      </div>
    </nav>

  )
}

export default Header