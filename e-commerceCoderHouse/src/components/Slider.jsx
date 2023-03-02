import Carousel from "react-bootstrap/Carousel";

function Slider() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/banner1.png"
					alt="First slide"
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/banner2.png"
					alt="Second slide"
				/>

				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/banner3.png"
					alt="Third slide"
				/>

				<Carousel.Caption></Carousel.Caption>
        
			</Carousel.Item>
      <Carousel.Item>
				<img
					className="d-block w-100"
					src="./src/assets/sliderImg/banner4.png"
					alt="Third slide"
				/>

				<Carousel.Caption></Carousel.Caption>
        
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
