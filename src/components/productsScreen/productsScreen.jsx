import React from 'react';
import Slider from 'react-slick';
import Logo from '../svgComponents/logo';
// import { useNavigate } from 'react-router-dom';
import Styles from './productsScreen.module.scss';

function ProductsScreen() {
	// const navigate = useNavigate();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className={Styles.mainScreen}>
			<Logo id="ProductsScreenLogo" styles={Styles.logo} />
			<div className={Styles.bgContainer}>
				<div className={Styles.bgContent}></div>
			</div>
			<Slider {...settings}>
				<div className={Styles.section}>
					<p>kansdkajnd</p>
				</div>
				<div className={Styles.section}>
					<p>kansdkajnd</p>
				</div>
			</Slider>
		</div>
	);
}

export { ProductsScreen };
