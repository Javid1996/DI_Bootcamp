import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className = "img">
                <div className = 'div'>
                    <img className = "img" src="hong kong.jpeg" />
                    <p className="legend">Hong Kong 1</p>
                </div>
                <div className = 'div'>
                    <img className = "img" src="macao.webp" />
                    <p className="legend">Macao</p>
                </div>
                <div className = 'div'>
                    <img className = "img" src="japan.webp" />
                    <p className="legend"> Japan</p>
                </div>
                <div className = 'div'>
                    <img className = "img" src="las vegas.webp" />
                    <p className="legend">Las Vegas </p>
                </div>
     
                </Carousel>
        )
    }
}

export default DemoCarousel;