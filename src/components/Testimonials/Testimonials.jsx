import React, { useState } from "react";
import './Testimonials.css';
import person from '../../assets/person.jpg'
import { testimonialsData } from '../../data/testimonialsData';
 
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
                <span className="para">Testimonials</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione quas, non deserunt hic ipsa mollitia, eum, aliquid magni magnam ea molestiae nam.</span>
               

                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                <span>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
           <img src={person} alt="" />
           {/* <div className="arrows">
           
           <i 
           class="fa fa-heart"></i>

           <i 
               
           class="fa fa-heart"></i>
          
          <i 
               
           class="fa fa-heart"></i>
           </div> */}
        </div>
    </div> 
    
    
  );
};

export default Testimonials