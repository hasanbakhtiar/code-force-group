
import React, { useContext } from 'react'
import Header from '../components/Header'
import { ProductContext } from '../context/ProductContext'
import Slider from "react-slick";
import SingleCard from '../components/SingleCard';
const Home = () => {
    const [productData] = useContext(ProductContext);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-dark btn-lg px-4 gap-3">Primary button</button>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {productData.map(item => (
                        <SingleCard alldata={item} rescount={12}/>
                    ))}
                </Slider>

            </div>
            </div>
            )
}

            export default Home