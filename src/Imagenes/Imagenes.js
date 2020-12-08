import React from 'react';
import { Carousel, Row, Col } from 'antd';
import Juntos from '../assests/Juntos/20201106_134859.jpg';
import Juntos2 from '../assests/Juntos/IMG-20201106-WA0013.jpg';
import Juntos3 from '../assests/Juntos/IMG-20201106-WA0023.jpg';
import Juntos4 from '../assests/Juntos/IMG-20201106-WA0015.jpg';
import Juntos5 from '../assests/Juntos/IMG-20201106-WA0025.jpg';
import Juntos6 from '../assests/Juntos/IMG-20201106-WA0027.jpg';
import ReactPlayer from 'react-player';
import './Imagenes.css';

export default function Imagenes() {
	const contentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	};
	return (
		<>
			<Row style={{ marginTop: 20 }}>
				<Col md={4}> </Col>
				<Col md={16}>
					<div class="galeria">
						<input type="radio" name="navegacion" id="_1" checked />
						<input type="radio" name="navegacion" id="_2" />
						<input type="radio" name="navegacion" id="_3" />
						<input type="radio" name="navegacion" id="_4" />
						<img src={Juntos2} width="260" height="300" alt="Galeria CSS 1" />
						<img src={Juntos} width="260" height="300" alt="Galeria CSS 2" />
						<img src="http://placekitten.com/260/300" width="260" height="300" alt="Galeria CSS 3" />
						<img
							src="http://www.stevensegallery.com/260/300"
							width="260"
							height="300"
							alt="Galeria CSS 4"
						/>
					</div>
					<br />
					<br />
					<div class="child-page-listing">
						<h2 style={{ color: 'white' }}>Nuestro Amor</h2>

						<div class="grid-container">
							<article id="3685" class="location-listing">
								<a class="location-title" href="#">
									Te amo{' '}
								</a>

								<div class="location-image">
									<a href="#">
										<img width="300" height="169" src={Juntos3} alt="san francisco" />{' '}
									</a>
								</div>
							</article>

							<article id="3688" class="location-listing">
								<a class="location-title" href="#">
									Es mi vida{' '}
								</a>

								<div class="location-image">
									<a href="#">
										<img width="300" height="169" src={Juntos4} alt="london" />{' '}
									</a>
								</div>
							</article>

							<article id="3691" class="location-listing">
								<a class="location-title" href="#">
									Le ofrezco
								</a>

								<div class="location-image">
									<a href="#">
										<img width="300" height="169" src={Juntos5} alt="new york" />{' '}
									</a>
								</div>
							</article>

							<article id="3694" class="location-listing">
								<a class="location-title" href="#">
									Mi vida sin usted no tienee sentido
								</a>

								<div class="location-image">
									<a href="#">
										<img width="300" height="169" src={Juntos6} alt="cape town" />{' '}
									</a>
								</div>
							</article>

							<article id="3697" class="location-listing">
								<a class="location-title" href="#">
									Lugares que iremos{' '}
								</a>

								<div class="location-image">
									<a href="#">
										<img
											width="300"
											height="169"
											src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg"
											alt="beijing"
										/>{' '}
									</a>
								</div>
							</article>

							<article id="3700" class="location-listing">
								<a class="location-title" href="#">
									Juntos{' '}
								</a>

								<div class="location-image">
									<a href="#">
										<img
											width="300"
											height="169"
											src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg"
											alt="paris"
										/>
									</a>
								</div>
							</article>
						</div>
					</div>
					<ReactPlayer playing={true} url="https://www.youtube.com/watch?v=qrh1WDVYqoo" />
					<br />
					<br />
				</Col>
				<Col md={4}> </Col>
			</Row>
		</>
	);
}
