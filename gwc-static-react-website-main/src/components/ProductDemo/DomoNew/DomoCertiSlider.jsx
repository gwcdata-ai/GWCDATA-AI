import React from 'react'
import Slider from "react-slick";
import f1 from "../../../assets/images/ProductDemo/team1.webp";
import f2 from "../../../assets/images/ProductDemo/team2.webp";
import f3 from "../../../assets/images/ProductDemo/team3.webp";
import f4 from "../../../assets/images/ProductDemo/team4.webp";
import f5 from "../../../assets/images/ProductDemo/team5.webp";
import f6 from "../../../assets/images/ProductDemo/team6.webp";
import f7 from "../../../assets/images/ProductDemo/team7.webp";
import f8 from "../../../assets/images/ProductDemo/team8.jpeg";
import f9 from "../../../assets/images/ProductDemo/team9.jpeg";


const DomoCertiSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom my-5 my-lg-2">
                <div className="loading mt-5 my-lg-2" />
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 2000
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
        <div className="slider-container">

            <Slider {...settings}>
                
                <div>
                    <img src={f1} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f2} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f3} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f4} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f5} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f6} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f7} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f8} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
                <div>
                    <img src={f9} alt="" className="mt-lg-5 w-100 rounded-5" />
                </div>
            </Slider>
        </div>
    )
}

export default DomoCertiSlider
