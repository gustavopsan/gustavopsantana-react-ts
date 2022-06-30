import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Image from "../components/Image";
import WhiteTitle from "../components/WhiteTitle";
import { Text } from "../components/Text";

import manutencaoBackgroung from '../assets/img/fundo-manutencao.webp';
import avisoImage from '../assets/img/aviso.png';

const Portifolio = () => {
    return (
        <React.Fragment>
            <Header />
            <Container backgroundImage={manutencaoBackgroung}>
                <Image src={avisoImage} className="maintence-logo" alt="Maintenance Logo"/>
                <WhiteTitle>
                    Página em Manutenção!
                </WhiteTitle>
                <Text color="#F2F2F2">
                    Relaxa... Estou preparando algo legal por aqui e logo compartilho com vocês!
                </Text>
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default Portifolio;