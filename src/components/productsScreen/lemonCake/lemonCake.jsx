import React from 'react';
import Parallax from 'parallax-js';
import cake from '../../../assets/cake_opaque.png';
import cakeLayer1 from '../../../assets/cake_layer1.png';
import cakeLayer2 from '../../../assets/cake_layer2.png';
import cakeLayer3 from '../../../assets/cake_layer3.png';
// import dots from '../../../assets/polka-dots.png';
import Styles from './lemonCake.module.scss';

function LemonCake() {
	React.useEffect(() => {
		const product = document.getElementById('imagesContainer1');
		const parallax1 = new Parallax(product);
		parallax1.friction(0.015, 0.015);

		const parallax2 = new Parallax(document.getElementById('imagesContainer2'));
		parallax2.friction(0.01, 0.01);

		const parallax3 = new Parallax(document.getElementById('imagesContainer3'));
		parallax3.friction(0.005, 0.005);
	}, []);

	return (
		<div className={Styles.mainScreen}>
			<div className={Styles.layersContainer}>
				<div id='imagesContainer3' className={Styles.imagesContainer}>
					<img data-depth='0.3' className={Styles.cakeLayer3} src={cakeLayer3} alt='bg' />
				</div>
				<div id='imagesContainer2' className={Styles.imagesContainer}>
					<img data-depth='-0.1' className={Styles.cakeLayer2} src={cakeLayer2} alt='bg' />
				</div>
				<div id='imagesContainer1' className={(Styles.imagesContainer, Styles.above)}>
					<img data-depth='-0.5' className={Styles.cakeLayer1} src={cakeLayer1} alt='bg' />
				</div>
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
