import React from 'react';

import TransparentHeader from '../components/TransparentHeader';
import Footer from '../components/Footer';
import BlackTitle from '../components/BlackTitle';
import Container from '../components/Container';
import WhiteTitle from '../components/WhiteTitle';
import Button from '../components/Button';

import manTablet from '../assets/img/man-tablet.jpg'
import yellowPen from '../assets/img/yellow_pen.webp';
import blueWall from '../assets/img/blue_wall.webp';
import contactDesk from '../assets/img/contact-background.webp';



const Home = () => {
  return (
    <React.Fragment>
      <TransparentHeader />
      <main>
        <Container backgroundImage={manTablet}>
          <WhiteTitle>
            Construímos seu site com a melhor e mais atual tecnologia do mercado!
          </WhiteTitle>
        </Container>
        <Container backgroundImage={blueWall}>
          <BlackTitle>
            Tiramos sua ideia do papel e a tornamos em algo que todos possam adimirar!
          </BlackTitle>
        </Container>
        <Container backgroundImage={contactDesk}>
          <WhiteTitle>
            Conheça nossos serviços: Entre em contato e saiba como podemos te ajudar!
          </WhiteTitle>
          <Button width={"250px"} onClick={goToContact}>
            Fale conosco
          </Button>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

const goToContact = () => {
  window.location.href = "/contact";
}

export default Home;