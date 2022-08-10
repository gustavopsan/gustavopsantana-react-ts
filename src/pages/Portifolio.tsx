import React from "react";
import TransparentHeader from "../components/TransparentHeader";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Image from "../components/Image";
import WhiteTitle from "../components/WhiteTitle";
import BlackTitle from "../components/BlackTitle";
import { Text, SmallText } from "../components/Text";
import Aligner from "../components/Aligner";
import Button from "../components/Button";

import codeBackgroung from '../assets/img/code-background.webp';
import mockupJornaldaManha from '../assets/img/mockups/mockup-jornaldamanha.png';
import mockupArede from '../assets/img/mockups/mockup-arede.png';
import mockupAtarde from '../assets/img/mockups/mockup-atarde.png';
import mockupDol from '../assets/img/mockups/mockup-dol.png';
import mockupEnfoco from '../assets/img/mockups/mockup-enfoco.png';
import mockupFolha from '../assets/img/mockups/mockup-folha.png';
import mockupGrafipress from '../assets/img/mockups/mockup-grafipress.png';
import mockupTribuna from '../assets/img/mockups/mockup-tribuna.png';
import mockupTNOnline from '../assets/img/mockups/mockup-tnonline.png';
import mockupGazeta from '../assets/img/mockups/mockup-gazeta.png';
import iconLink from '../assets/img/link-thin.svg';
import iconMWwhite from '../assets/img/mw.svg';
import iconMWblack from '../assets/img/mw-black.svg';

const Portifolio = () => {

    const openPage = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <React.Fragment>
            <TransparentHeader />
            <Container backgroundImage={codeBackgroung}>
                <WhiteTitle>Meu Portifólio</WhiteTitle>
                <Text color="#F2F2F2">Projetos nos quais eu trabalhei no desenvolvimento ou manutenção das interfaces gráficas</Text>
            </Container>

            <Container backgroundColor="#0e1118">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupGazeta} alt="Mockup Tribuna Online" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <WhiteTitle>Gazeta de Alagoas</WhiteTitle>
                        <Text color="#F2F2F2">O portal pioneiro em Alagoas que traz as últimas notícias de Maceió e do interior do Estado: política, economia, esportes e diversão você vê primeiro na Gazeta de Alagoas.</Text>
                        <SmallText color="#F2F2F2">
                            <b>Tráfego:</b> 55.4K visitas/mês
                        </SmallText>
                        <SmallText color="#F2F2F2">
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWwhite} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://gazetadealagoas.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#F2F2F2">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupJornaldaManha} alt="Mockup Jornal da Manhã" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <BlackTitle>Jornal Da Manhã</BlackTitle>
                        <Text>Porta-voz online do diário impresso "Jornal da Manhã" de Ponta Grossa, Paraná, está sempre atualizado com matérias relevantes a toda região dos Campos Gerais.</Text>
                        <SmallText>
                            <b>Tráfego:</b> 14.1K visitas/mês
                        </SmallText>

                        <Button width={"250px"} onClick={() => openPage("https://arede.info/jornaldamanha")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#0e1118">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupDol} alt="Mockup Dol" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <WhiteTitle>DOL (Diário Online)</WhiteTitle>
                        <Text color="#F2F2F2">Te informa sobre as últimas notícias de Belém do Pará, Região Norte, Amazônia e do mundo sobre emprego, concursos, saúde, educação, tecnologia, política, polícia, cultura, cotidiano e muito mais.</Text>
                        <SmallText color="#F2F2F2">
                            <b>Tráfego:</b> 452.0K visitas/mês
                        </SmallText>
                        <SmallText color="#F2F2F2">
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWwhite} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://dol.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#F2F2F2">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupArede} alt="Mockup aRede" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <BlackTitle>aRede.info</BlackTitle>
                        <Text>O aRede é o principal portal de notícias da região de Ponta Grossa no Paraná. Atualizado 24 horas por dia, 7 dias por semana.</Text>
                        <SmallText>
                            <b>Tráfego:</b> 1.6M visitas/mês
                        </SmallText>

                        <Button width={"250px"} onClick={() => openPage("https://arede.info")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>
            
            <Container backgroundColor="#0e1118">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupAtarde} alt="Mockup A Tarde" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <WhiteTitle>A Tarde</WhiteTitle>
                        <Text color="#F2F2F2">Portal de notícias do grupo A Tarde, o jornal líder na Bahia e com maior circulação no nordeste do país.</Text>
                        <SmallText color="#F2F2F2">
                            <b>Tráfego:</b> 3.4M visitas/mês
                        </SmallText>
                        <SmallText color="#F2F2F2">
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWwhite} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://atarde.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#F2F2F2">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupEnfoco} alt="Mockup Enfoco" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <BlackTitle>Enfoco</BlackTitle>
                        <Text>Portal de notícias do Rio de Janeiro e Região dos Lagos, o Enfoco te atualiza sobre tudo que que está havendo no estado do Rio e em todo o Brasil.</Text>
                        <SmallText>
                            <b>Tráfego:</b> 814.6K visitas/mês
                        </SmallText>
                        <SmallText>
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWblack} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://enfoco.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#0e1118">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupFolha} alt="Mockup Folha de Londrina" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <WhiteTitle>Folha de Londrina</WhiteTitle>
                        <Text color="#F2F2F2">Portal digital do jornal Folha de Londrina, fundado em 1948. Com uma média de 40 mil exemplares vendidos por dia, o Folha de Londrina circula em mais de 300 municípios do Paraná, além de algumas localidades dos Estados de São Paulo e Mato Grosso.</Text>
                        <SmallText color="#F2F2F2">
                            <b>Tráfego:</b> 612.7K visitas/mês
                        </SmallText>
                        <SmallText color="#F2F2F2">
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWwhite} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://folhadelondrina.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#F2F2F2">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupGrafipress} alt="Mockup Grafipress" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <BlackTitle>Grafipress</BlackTitle>
                        <Text>A Grafipress é uma gráfica rotativa coldset de alta qualidade e baixo custo, realiza produções em alta escala, trabalhando com impressão de jornais (de bairros, sindicatos, associações, etc), encartes, panfletos/flyers, material político e informativos em geral.</Text>
                        <SmallText>
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWblack} alt="Link Icon" width="150px" paddingBottom="20px"/>
                        
                        <Button width={"250px"} onClick={() => openPage("https://grafipress.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#0e1118">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupTribuna} alt="Mockup Tribuna Online" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <WhiteTitle>Tribuna Online</WhiteTitle>
                        <Text color="#F2F2F2">"Aqui a notícia chega mais rápido e ao seu alcance". É com essa premissa que o Tribuna Online entrega informação diariamente a toda região de Vitória, Vila Velha, Cariacica e de todo o estado do Espírito Santo.</Text>
                        <SmallText color="#F2F2F2">
                            <b>Tráfego:</b> 3.5M visitas/mês
                        </SmallText>
                        <SmallText color="#F2F2F2">
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWwhite} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://tribunaonline.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Container backgroundColor="#F2F2F2">
                <Aligner horizontal limiter={1400}>
                    <Aligner vertical>
                        <Image src={mockupTNOnline} alt="Mockup TNOnline" width="100%"/>
                    </Aligner>
                    <Aligner vertical>
                        <BlackTitle>TNOnline</BlackTitle>
                        <Text>O TNOnline é um dos maiores portais de notícias do Paraná, produzindo conteúdo sério e de credibilidade, com foco na produção de conteúdo regional do norte do estado.</Text>
                        <SmallText>
                            <b>Tráfego:</b> 1.7M visitas/mês
                        </SmallText>
                        <SmallText>
                            Agenciado por:
                        </SmallText>
                        <Image src={iconMWblack} alt="Link Icon" width="150px" paddingBottom="20px"/>

                        <Button width={"250px"} onClick={() => openPage("https://tnonline.uol.com.br")}>
                            <Image src={iconLink} alt="Link Icon" width="25px"/>
                            Acessar
                        </Button>
                    </Aligner>
                </Aligner>
            </Container>

            <Footer />
        </React.Fragment>
    );
}

export default Portifolio;