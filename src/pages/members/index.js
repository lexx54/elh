import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const Members = () => (
  <main>
  <h1>Teachers</h1>
  <CardColumns className="cards-flex">
    <Card border="primary" className="cards-flex-card">
      <Card.Img variant="top" src="http://placeimg.com/640/480/People"></Card.Img>
      <Card.Body>
        <Card.Title>
          Lexington Chaparro
        </Card.Title>
        <Card.Text>
          2 years of experiences in teaching English <br></br>
          Proficiensce B2

        </Card.Text>
      </Card.Body>
    </Card>
    <Card border="primary" className="cards-flex-card">
      <Card.Img variant="top" src="http://placeimg.com/640/480/People"></Card.Img>
      <Card.Body>
        <Card.Title>
          Matzuri Ailin
        </Card.Title>
        <Card.Text>
          1 years of experiences in teaching English <br></br>
          Proficiensce A2 <br/>
          Top teacher
        </Card.Text>
      </Card.Body>
    </Card>
    <Card border="primary" className="cards-flex-card">
      <Card.Img variant="top" src="http://placeimg.com/640/480/People"></Card.Img>
      <Card.Body>
        <Card.Title>
          Maria Hoyo
        </Card.Title>
        <Card.Text>
          1 years of experiences in teaching English <br></br>
          Proficiensce A1 <br/>
          Still Learning

        </Card.Text>
      </Card.Body>
    </Card>
    <Card border="primary" className="cards-flex-card">
      <Card.Img variant="top" src="http://placeimg.com/640/480/People"></Card.Img>
      <Card.Body>
        <Card.Title>
          Juan Jose
        </Card.Title>
        <Card.Text>
          1 years of experiences in teaching English <br></br>
          Proficiensce A1 <br/>
          Making Progress

        </Card.Text>
      </Card.Body>
    </Card>
  </CardColumns>
  </main>
  )

export default Members;