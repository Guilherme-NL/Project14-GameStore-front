import styled from "styled-components";

export default function Modal({ closeModal }) {
  return (
    <ModalBackground>
      <Container>
        <div onClick={() => closeModal(false)}>X</div>
        <h1>Obrigado!!</h1>
        <p>Sua compra foi realizada com sucesso!!</p>
      </Container>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
  height: auto;
  border-radius: 12px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;

  div {
    display: flex;
    justify-content: flex-end;
    font-family: "Metal Mania", cursive;
  }

  h1 {
    font-size: 25px;
    font-family: "Metal Mania", cursive;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
`;
