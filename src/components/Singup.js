import styled from "styled-components";
import { Link } from "react-router-dom";

import SingupForm from "./SingupForm";

export default function Singup() {
  return (
    <Container>
      <h1>GameMaster</h1>
      <SingupForm />
      <Link to="/" style={{ textDecoration: "none" }}>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: #121212;

  h1 {
    font-size: 45px;
    color: #f5f5f5;
    font-family: "Metal Mania", cursive;
    margin-bottom: 25px;
  }

  p {
    font-size: 15px;
    color: #f5f5f5;
    margin-top: 35px;
  }
`;
