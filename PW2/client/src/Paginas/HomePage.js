import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export default function HomePage() {
  return (
   <><><><div class="container mt-5">
      <div class="block-heading">
        <h2 class="text-info">Info</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
      </div>
      <div class="row aling-item-center">
        <div class="col-md-6">
          <img width="462" height="275" src={require('./../Imagenes/aicm-recorte-vuelos.jpeg')}></img>
        </div>
        <div class="col-md-6">
          <h3>Lorem ipsum dolor sit amet</h3>
          <div class="getting-started-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
    <section class="clean-block features">
        <div class="container mt-5">
          <div class="block-heading">
            <h2 class="text-info">Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-5 feature-box"><i class="icon-music-tone-alt icon"></i>
              <h4>Busca</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
            </div>
            <div class="col-md-5 feature-box"><i class="icon-game-controller icon"></i>
              <h4>Separa</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
            </div>
            <div class="col-md-5 feature-box"><i class="icon-trophy icon"></i>
              <h4>Paga</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
            </div>
            <div class="col-md-5 feature-box"><i class="icon-settings icon"></i>
              <h4>Disfruta</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
            </div>
          </div>
        </div>
      </section></>
      <Carousel  variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../Imagenes/62917b23bd247.jpeg')}
          alt="First slide"
          height={'560px'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../Imagenes/aeropuerto-gdl.jpg')}
          alt="Second slide"
          height={'560px'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../Imagenes/Diseno-sin-titulo.jpg')}
          alt="Third slide"
          height={'560px'}
        />
      </Carousel.Item>
    </Carousel>
      <section class="clean-block about-us">
        <div class="container mt-5">
          <div class="block-heading">
            <h2 class="text-info">Sobre nosotros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
          <div class="row justify-content-center">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('./../Imagenes/5176484.jpg')} />
      <Card.Body>
        <Card.Title>Destinos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('./../Imagenes/62917b23bd247.jpeg')}/>
      <Card.Body>
        <Card.Title>Primera clase</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('./../Imagenes/f.elconfidencial.com_original_f38_b14_c18_f38b14c18cb17dadacfc54c58909823a.jpg')} />
      <Card.Body>
        <Card.Title>Descuentos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
        </div>
      </section></>
      <footer class="page-footer dark">
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-3">
              <h5>Get started</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Downloads</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
              <h5>About us</h5>
              <ul>
                <li><a href="#">Company Information</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
              <h5>Support</h5>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help desk</a></li>
                <li><a href="#">Forums</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
              <h5>Legal</h5>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <p>© 2023 Copyright Text</p>
        </div>
      </footer></>
  )
}

