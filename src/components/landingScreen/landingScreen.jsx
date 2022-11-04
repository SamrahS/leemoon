import React from 'react';
import { useNavigate } from 'react-router-dom';
import Parallax from 'parallax-js';
import gsap from 'gsap';
import Styles from './landingScreen.module.scss';
import LemonFull from '../svgComponents/lemonFull';
import LemonHalf from '../svgComponents/lemonHalf';
import LemonQuarter from '../svgComponents/lemonQuarter';
import Petal from '../svgComponents/petal';
import Flower from '../svgComponents/flower';
import Logo from '../svgComponents/logo';

function LandingScreen() {
	const navigate = useNavigate();

	React.useEffect(() => {
		const scene = document.getElementById('scene');
		const parallax = new Parallax(scene);

		parallax.friction(0.01, 0.01);
	}, []);

	function pageTransition() {
		gsap.to('#logo', { opacity: 0 });
		gsap.to('#landingBlob', {
			scale: 10,
			duration: 1,
			onComplete: () => {
				navigate('/leemoon');
			}
		}, '<0.5');
	}

	return (
		<div className={Styles.mainScreen}>
			<div id="landingBlob" onClick={() => { pageTransition(); }} className={Styles.blob}></div>
			<Logo ID="logo" styles={Styles.logo} />
			<div id="scene" className={Styles.parallaxContainer}>
				<div data-depth="-0.5" className={Styles.scene}>
					<div className={Styles.lemonFull1}><LemonFull /></div>
					<div className={Styles.lemonFull2}><LemonFull /></div>
					<div className={Styles.lemonHalf1}><LemonHalf /></div>
					<div className={Styles.lemonHalf2}><LemonHalf /></div>
					<div className={Styles.lemonQuarter1}><LemonQuarter /></div>
					<div className={Styles.lemonQuarter2}><LemonQuarter /></div>
					<div className={Styles.petal1}><Petal /></div>
					<div className={Styles.petal2}><Petal /></div>
					<div className={Styles.flower1}><Flower /></div>
					<div className={Styles.flower2}><Flower /></div>
					<div className={Styles.flower3}><Flower /></div>
					<div className={Styles.flower4}><Flower /></div>
				</div>
			</div>
		</div>
	);
}

export { LandingScreen };
