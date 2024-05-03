import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './slidercomp.scss';
import Img1 from '../../Assets/Slider-images/slider-1.jpg';
import Img2 from '../../Assets/Slider-images/slider-2.jpg';
import Img3 from '../../Assets/Slider-images/slider-3.jpg';

const SliderComp = () => {
	const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			fade: true,
			autoplaySpeed: 1000,
		};
  return (
		<>
			<div className='sliderParent'>
				<Slider {...settings}>
					<div>
						<div className='SliderContent'>
							<div className='dateTape'>
								<span><i className="fa-regular fa-clock"></i></span>
								<span>12 Sep</span>
							</div>
								<h5>Renewal process enabled on 09.07.2024</h5>
								<p>This portal envisage to provide an end-to-end solution for all the scholarship schemes</p>
								<p className='moreCta'>More Latest News </p>
						</div>
					</div>
					<div>
						<div className='SliderContent'>
							<div className='dateTape'>
								<span><i className="fa-regular fa-clock"></i></span>
								<span>11 Sep</span>
							</div>
								<h5>Renewal process enabled on 09.07.2024</h5>
								<p>This portal envisage to provide an end-to-end solution for all the scholarship schemes</p>
								<p className='moreCta'>More Latest News </p>
						</div>
					</div>
					<div>
						<div className='SliderContent'>
							<div className='dateTape'>
								<span><i className="fa-regular fa-clock"></i></span>
								<span>10 Sep</span>
							</div>
								<h5>Renewal process enabled on 09.07.2024</h5>
								<p>This portal envisage to provide an end-to-end solution for all the scholarship schemes</p>
								<p className='moreCta'>More Latest News </p>
						</div>
					</div>
				</Slider>
				<div className='opacityBg'></div>
			</div>
			
		</>
  )
}

export default SliderComp