import React from 'react';

import TransparentHeader from '../components/TransparentHeader';
import Footer from '../components/Footer';
import Aligner from '../components/Aligner';
import BlackTitle from '../components/BlackTitle';
import Container from '../components/Container';
import WhiteTitle from '../components/WhiteTitle';
import Button from '../components/Button';

import manTablet from '../assets/img/man-tablet.webp'
import blueWall from '../assets/img/blue_wall.webp';
import contactDesk from '../assets/img/contact-background.webp';
import laptopKeyboard from '../assets/img/laptop-keyboard.webp';

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
          <Aligner vertical end>
            <BlackTitle>
              Tiramos sua ideia do papel e a tornamos em algo que todos possam adimirar!
            </BlackTitle>
          </Aligner>
        </Container>
        <Container backgroundImage={laptopKeyboard}>
          <Aligner vertical end>
            <BlackTitle>
              Alcance um público maior e amplifique suas vendas com o site que você precisa para expor o seu negócio na Internet!
            </BlackTitle>
          </Aligner>
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