import React from 'react';
// import { LemonCake } from './lemonCake/lemonCake';
// import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Styles from './productsScreen.module.scss';

function ProductsScreen() {
	// const navigate = useNavigate();

	const [section, setSection] = React.useState();

	React.useEffect(() => {
		const sectionTimeline = gsap.timeline();
		const animationProps = {
			x: 10,
			opacity: 1,
			duration: 0.3
		};

		sectionTimeline.to('#productSection_3', animationProps)
			.to('#productSection_2', animationProps, '<0.1')
			.to('#productSection_1', animationProps, '<0.1')
			.to('#productSection_0', {
				...animationProps,
				onComplete: () => {
					setTimeout(() => {
						setSection(0);
					}, 500);
				}
			}, '<0.1');
	}, []);

	const sectionProps = (index) => ({
		id: `productSection_${index}`,
		className: `${Styles.section} ${section === index ? Styles.selected : null}`,
		onClick: () => setSection(index)
	});

	return (
		<div className={Styles.mainScreen}>
			<div {...sectionProps(0)}>
				<p>LEMON CAKE</p>
				<div className={Styles.sectionContent}>
					<h4>LEMON<br/>CAKE</h4>
					<div className={Styles.imageContainer}>
						<div className={Styles.imageShadow} />
					</div>
				</div>
			</div>
			<div {...sectionProps(1)}>
				<p>LEMON CUPCAKE</p>
				<div className={Styles.sectionContent}>
					<h4>LEMON<br/>CUPCAKE</h4>
					<div className={Styles.imageContainer}>
						<div className={Styles.imageShadow} />
					</div>
				</div>
			</div>
			<div {...sectionProps(2)}>
				<p>LEMON TART</p>
				<div className={Styles.sectionContent}>
					<h4>LEMON<br/>TART</h4>
					<div className={Styles.imageContainer}>
						<div className={Styles.imageShadow} />
					</div>
				</div>
			</div>
			<div {...sectionProps(3)}>
				<p>LEMON TARTLET</p>
				<div className={Styles.sectionContent}>
					<h4>LEMON<br/>TARTLET</h4>
					<div className={Styles.imageContainer}>
						<div className={Styles.imageShadow} />
					</div>
				</div>
			</div>
		</div>
	);
}

export { ProductsScreen };
