import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col,Row,Container} from 'react-bootstrap';
const Home = () => {
  return (
    <Container >
      <Row className='justify-content-center align-items-center'>
      <Col>
    <Carousel fade >
    <Carousel.Item>
<img className="d-block w-100"  height={590} src={require("../Assets/image1.jpg")} alt="First slide" />
      <Carousel.Caption>
        <h3>Meals</h3>
        <p>Veg special!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="d-block w-100" width={900} height={590} src={require("../Assets/image2.jpg")} alt="First slide" />
      <Carousel.Caption>
        <h3>Veg pulao</h3>
        <p>Hury! taste it! </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="d-block w-100" width={900} height={590} src={require("../Assets/image3.jpg")} alt="First slide" />
      <Carousel.Caption>
        <h3>Chicken biriyani</h3>
        <p>
         Non-veg special
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Col>
  </Row>
  </Container>
  );
}

export default Home;