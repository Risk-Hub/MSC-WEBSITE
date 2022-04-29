import React from "react";
import './Slider.css'
import { MdChevronRight , MdChevronLeft} from 'react-icons/md';
const ReactCardSlider =(props)=>{
    const slides = [1,2,3,4,5,6,7,8];

    
    const slideLeft = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 240;

    }
    const slideRight = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollRight + 240;
    }

    return(
        
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/> 
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>            <div id="slider">
                {
                slides.map((slide,index)=>{
                    return(
                        <div className="slider-card">
                            <div className="slider-card-image"> 
                            </div>
                            <p className="slider-card-title">Event Name</p>
                            <p className="slider-card-description">Event Description</p>
                            
                            


                        </div>

                    )
                })
                }
            
               
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
            <div></div>

        </div>
    )

}
export default ReactCardSlider