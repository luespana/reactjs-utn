import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block h-50 imagenes" 
            src="img/galeria/img01.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-50 imagenes"
            src="img/galeria/img02.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-50 imagenes"
            src="img/galeria/img03.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;



   // <main class="holder">
    //     <h2>Galeria</h2>
    //    <div class="imagenes">
    //        <img src="img/galeria/img01.jpg" alt=""/>
    //        <img src="img/galeria/img02.jpg" alt=""/>
    //        <img src="img/galeria/img03.jpg" alt=""/>
    //        <img src="img/galeria/img04.jpg" alt=""/>
    //        <img src="img/galeria/img05.jpg" alt=""/>
    //        <img src="img/galeria/img06.jpg" alt=""/>
    //        <img src="img/galeria/img07.jpg" alt=""/>
    //    </div>
    // </main>