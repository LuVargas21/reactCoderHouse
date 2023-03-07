import Carousel from "react-bootstrap/Carousel";

function Slider() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/slider1.webp"
					alt="First slide"
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/slider2.webp"
					alt="Second slide"
				/>

				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/slider3.webp"
					alt="Third slide"
				/>

				<Carousel.Caption></Carousel.Caption>
        
			</Carousel.Item>
      <Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/slider4.webp"
					alt="Third slide"
				/>

				<Carousel.Caption></Carousel.Caption>
        
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/slider5.webp"
					alt="Third slide"
				/>

				<Carousel.Caption></Carousel.Caption>
        
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/slider6.webp"
					alt="Third slide"
				/>

				<Carousel.Caption></Carousel.Caption>
        
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
