import { Link } from "react-router-dom";
import styled from "styled-components";

import SinginForm from "./SinginForm";

export default function Singin() {
  return (
    <Container>
      <h1>GameMaster</h1>
      <SinginForm />
      <Link to="/singup" style={{ textDecoration: "none" }}>
        <p>Primeira vez? Cadastre-se!</p>
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
