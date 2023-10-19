import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";


const AddSlider = () => {
    const {brandName} = useContext(AuthContext)
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/slider')
            .then(res => res.json())
            .then(data => {
                const brandSlider = data.find(brandSlider=>brandSlider.brand === brandName)
                setSliderData(brandSlider)
            })
    }, [])
    console.log(sliderData)



    return (
        <div className="carousel h-[600px] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={sliderData.image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sliderData.image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={sliderData.image3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default AddSlider;