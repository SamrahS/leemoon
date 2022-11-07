import React from 'react';
import Parallax from 'parallax-js';
import cake from '../../../assets/lemon-cake.png';
import cakeLayer1 from '../../../assets/lemon-cake-1.png';
import cakeLayer2 from '../../../assets/lemon-cake-2.png';
import cakeLayer3 from '../../../assets/lemon-cake-3.png';
import Styles from './lemonCake.module.scss';

function LemonCake() {
	React.useEffect(() => {
		setTimeout(() => {
			const product = document.getElementById('imagesContainer1');
			const parallax1 = new Parallax(product);
			parallax1.friction(0.015, 0.015);

			const parallax2 = new Parallax(document.getElementById('imagesContainer2'));
			parallax2.friction(0.01, 0.01);

			const parallax3 = new Parallax(document.getElementById('imagesContainer3'));
			parallax3.friction(0.005, 0.005);
		}, 500);
	}, []);

	return (
		<div className={Styles.mainScreen}>
			<div className={Styles.layersContainer}>
				<div id='imagesContainer3' className={Styles.imagesContainer}>
					<img data-depth='0.7' className={Styles.cakeLayer3} src={cakeLayer3} alt='bg' />
				</div>
				<div id='imagesContainer2' className={Styles.imagesContainer}>
					<img data-depth='-0.5' className={Styles.cakeLayer2} src={cakeLayer2} alt='bg' />
				</div>
				<div id='imagesContainer1' className={(Styles.imagesContainer, Styles.above)}>
					<img data-depth='-0.9' className={Styles.cakeLayer1} src={cakeLayer1} alt='bg' />
				</div>
			</div>
			<img
				className={Styles.cake}
				src={cake}
				alt='lemon_cake'
			/>
		</div>
	);
}

export { LemonCake };
