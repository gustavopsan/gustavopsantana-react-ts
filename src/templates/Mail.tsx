import React from "react";
import ReactEmail, { Box, Email, Item, Image, Span } from "react-html-email";
import "../styles/global.scss";

ReactEmail.configStyleValidator({
    platforms: [
        'gmail'
    ],
});

type Props = {
    name: string;
    email: string;
    message: string;
};

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
    width: "100%";
    font-family: "Montserrat md";
  }
`.trim();

const textColor = "#494949";

const backgroundStyle = {
    WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    backgroundColor: "#FFF",
    borderRadius: 7,
    boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    margin: "0 auto",
    width: "100%",
    padding: "0 32px",
};

const containerStyle = {
    backgroundColor: "#F5F8FA",
    width: "100%"
};

const DATE = new Date();

const Months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

const ContactMailTemplate = ({ name, email, message, }: Props) => (
    <Box align="center" style={containerStyle}>
        <Email align="center" headCSS={emailHeadCSS} title="Email enviado com typescript">
            <Item style={{ height: 45 }} />
            <Item>
                <Image
                    height="auto"
                    src={window.location.origin + "/Logo-gustavo-2.png"}
                    style={{ margin: "0 auto "}}
                    width={200}
                />
            </Item>
            <Item style={{ height: 20 }} />
            <Item align="center">
                <Box style={backgroundStyle}>
                    <Item style={{ height: 40 }} />
                    <Item>
                        <Span fontSize={30} fontWeight="bold" color={textColor}>Olá, Gustavo P. Santana!</Span>
                    </Item>
                    <Item style={{ height: 25 }} />
                    <Item>
                        <Span fontSize={15} color={textColor}>
                            Um novo cliente acaba de entrar em contato através do site e deixou uma nova mensagem!
                        </Span>
                    </Item>
                    <Item style={{ height: 25 }} />
                    <Item>
                        <Span fontSize={15} fontWeight="bold" color={textColor}>Detalhes do contato</Span>
                    </Item>
                    <Item style={{ height: 15 }} />
                    <Item>
                        <Span fontSize={15} fontWeight="bold" color={textColor}>Data: </Span>
                        <Span fontSize={15} color={textColor}>{DATE.getDate()} de {Months[DATE.getMonth()]} às {DATE.getHours()}:{DATE.getMinutes()}</Span>
                    </Item>
                    <Item>
                        <Span fontSize={15} fontWeight="bold" color={textColor}>Nome: </Span>
                        <Span fontSize={15} color={textColor}>{name}</Span>
                    </Item>
                    <Item>
                        <Span fontSize={15} fontWeight="bold" color={textColor}>E-mail: </Span>
                        <Span fontSize={15} color={textColor}>{email}</Span>
                    </Item>
                    <Item>
                        <Span fontSize={15} fontWeight="bold" color={textColor}>Mensagem: </Span>
                    </Item>
                    <Item>
                        <Span fontSize={15} color={textColor}>{message}</Span>
                    </Item>
                    <Item style={{ height: 50 }} />
                </Box>
            </Item>
            <Item style={{ height: 45 }} />
        </Email>
    </Box>
);

export { ContactMailTemplate };