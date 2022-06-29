import {useState} from "react";
import axios from "axios";

import Container from "../components/Container";
import Aligner from "../components/Aligner";
import WhiteTitle from "../components/WhiteTitle";

import contactBackground from "../assets/img/contact-background.webp";

import "../styles/contact.scss";
import { renderContactEmail } from "../modules/renderEmail";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const messageData = [
        { name: "Nome", value: name },
        { name: "E-mail", value: email },
        { name: "Mensagem", value: message }
    ];
    
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleMeassageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }
    
    function handleMailSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let validFields = 0;

        messageData.forEach(data => {
            if (data.value === "") {
                let message = `O campo ${data.name} não pode ficar vazio. Preencha para continuar.`;
                let messageElement = document.getElementById("form-message")!;

                messageElement.innerHTML = message;
                messageElement.classList.remove("hidden");

                if (messageElement.classList.contains("success")) {
                    messageElement.classList.remove("success");
                }

                setInterval(() => {
                    messageElement.classList.add("hidden");
                }, 3000)

                messageElement.classList.add("error");
            } else {
                validFields++;
            }
        });

        if (validFields === 3) {
            let mailHtml = renderContactEmail(messageData[0].value, messageData[1].value, messageData[2].value);

            axios.post("https://api.gustavopsantana.dev.br/send-message", {
                destination: "gustavopsantana4@gmail.com",
                subject: "Novo contato através do site gustavopsantana.dev.br",
                html: mailHtml
            })
            .then(response => {
                if (response.data.status === "success") {
                    let message = "Mensagem enviada com sucesso!";
                    let messageElement = document.getElementById("form-message")!;

                    messageElement.innerHTML = message;
                    messageElement.classList.remove("hidden");

                    if (messageElement.classList.contains("error")) {
                        messageElement.classList.remove("error");
                    }

                    setInterval(() => {
                        messageElement.classList.add("hidden");
                    }, 3000)

                    messageElement.classList.add("success");
                }
            })
        }
    }

    return (
        <Container backgroundImage={contactBackground}>
            <Aligner horizontal>
                <Aligner vertical>
                    <WhiteTitle>
                        Apenas uma mensagem e podemos firmar uma parceria que levará sua empresa a ter visibilidade na internet.
                    </WhiteTitle>
                    <WhiteTitle>Entre em contato!</WhiteTitle>
                </Aligner>
                <Aligner vertical center>
                    <form id="form-contact" onSubmit={handleMailSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Nome" onChange={handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea className="form-control" id="message" rows={3} onChange={handleMeassageChange} placeholder="Olá! Estou interessado(a) nos serviços informados pelo seu site! Por favor, entre em contato comigo!"></textarea>
                        </div>

                        <span id="form-message" className="hidden">O campo "nome" não pode estar vazio, preencha todos os campos para continuar</span>

                        <button type="submit" className="btn btn-primary">Deixar Mensagem</button>
                    </form>
                </Aligner>
            </Aligner>
        </Container>
    );
}

export default Contact;