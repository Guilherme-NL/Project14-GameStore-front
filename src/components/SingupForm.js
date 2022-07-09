import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dotenv from "dotenv";
dotenv.config();

export default function SingupForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [image, setImage] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");

  function submitRegistration(e) {
    e.preventDefault();
    setIsLoading(true);

    if (password === passwordConfirmation) {
      const url = "https://gamemaster-project14.herokuapp.com/signup";
      //const url = "http://localhost:5000/signup";
      const body = { name, email, image, password };

      axios
        .post(url, body)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao cadastrar o usuário");
          setIsLoading(false);
          navigate("/singup");
        });
    } else {
      alert("As senhas devem ser iguais!!");
      setIsLoading(false);
    }
  }

  return (
    <Container onSubmit={submitRegistration}>
      <input
        type="name"
        placeholder="Nome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="url"
        placeholder="Imagem"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="password"
        placeholder="Senha"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="password"
        placeholder="Confirme a senha"
        required
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit">Cadastrar</button>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 58px;
    background-color: #f5f5f5;
    border: 1px solid #121212;
    border-radius: 5px;
    padding: 12px;
    font-size: 20px;
    font-family: "Glegoo", serif;
    ::placeholder {
      color: #000000;
      font-size: 20px;
    }
    margin-bottom: 7px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    background-color: #444444;
    border-radius: 5px;
    border: 1px solid #121212;
    font-size: 20px;
    font-family: "Glegoo", serif;
    font-weight: bold;
    color: #ffffff;
  }
`;
