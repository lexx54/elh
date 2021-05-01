import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from '../../components/footer';

const Home = () =>{
  return (
  <>
    <main>
      <div className="header-img"></div>
      <Container as="section">
        <Row>
        <h1 className="title">Home</h1>
        </Row>
        <Row>
          <Col>lorem Ipsum asfoasjfsja[osf[asf[asfa[fasfasfpasjfaapjfpasjpaj</Col>
          <Col>lorem Ipsum asfoasjfsja[osf[asf[asfa[fasfasfpasjfaapjfpasjpaj</Col>
        </Row>
      </Container>
      <Container as ="section" className="carousel-container " fluid>
        <h2 className="text-center">Courses Available</h2>
        <Carousel className="carousel-content w-75 mx-auto">
          <Carousel.Item >
            <img src="http://placeimg.com/760/480/animal" alt="Course 1" 
            className="d-block w-100 "></img>
            <Carousel.Caption>
              <h3>Course still Available</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="http://placeimg.com/760/480/architecture" alt="Course 2"
            className="d-block w-100 "></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="http://placeimg.com/760/480/tech" alt="Course 2"
            className="d-block w-100 "></img>
          </Carousel.Item>
        </Carousel>
      </Container>
    </main>
    <Footer />
  </>
  )
}
export default Home ;