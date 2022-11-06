import React from 'react';
import Parallax from 'parallax-js';
import cake from '../../../assets/cake_opaque.png';
import dots from '../../../assets/polka-dots.png';
import Styles from './lemonCake.module.scss';

function LemonCake() {
	React.useEffect(() => {
		const product = document.getElementById('imagesContainer');
		const parallax = new Parallax(product);
		parallax.friction(0.015, 0.015);
	}, []);

	return (
		<div className={Styles.mainScreen}>
			<div id='imagesContainer' className={Styles.imagesContainer}>
				<img data-depth='-0.4' className={Styles.dots} src={dots} alt='bg' />
			</div>
			<img
				className={Styles.cake}
				src={cake}
				alt='lemon_cake'
			/>
			<div className={Styles.descContainer}>
				<h1>Ye hai Lemon cake</h1>
				<h2>VIP Lemon cake</h2>
			</div>
		</div>
	);
}

export { LemonCake };
