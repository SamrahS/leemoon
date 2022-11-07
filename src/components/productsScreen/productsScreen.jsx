import React from 'react';
import Slider from 'react-slick';
import { LemonCake } from './lemonCake/lemonCake';
// import { useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
import Styles from './productsScreen.module.scss';

function ProductsScreen() {
	// const navigate = useNavigate();

	React.useEffect(() => {
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		// slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className={Styles.mainScreen}>
			<Slider {...settings} >
				<LemonCake />
				<h1>Hello</h1>
			</Slider>
		</div>
	);
}

export { ProductsScreen };
