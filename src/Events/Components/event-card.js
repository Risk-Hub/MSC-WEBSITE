import React from "react";
import './event-card.css'
import {MdChevronRight,MdChevronLeft} from 'react-icons/md';
const ReactCardSlider =(props)=>{
    const slides = [1,2,3,4,5,6,7,8];

    
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollRight = slider.scrollLeft + 240;

    }
    const slideRight = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollRight + 240;
    }

    return(
        
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/> 
                        <div id="slider">
                {
                slides.map((slide,index)=>{
                    return(
                        <div className="slider-card">
                            <div className="slider-card-image"> 
                            </div>
                            <p className="slider-card-title">Event Name</p>
                            <p className="slider-card-description">Event Description</p>
                            <p>Held on : dd/mm/yyyy</p>
                            <p>Duration of the event : xx days</p>
                            <p>number of participants : xx</p>
                            <p>mode of conduct : offline/online/hybrid</p>                            
                            


                        </div>

                    )
                })
                }
            
               
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideLeft}/>
            <div></div>

        </div>
    )

}
export default ReactCardSlider