import styled from "styled-components";
import React from "react";

export default function HistoryList(props) {
  return (
    <PurchasesList>
      <div>
        <img src={props.image} alt="Game Cover"></img>
      </div>
      <div>
        <h1>
          <p>{props.name}</p>
        </h1>
        <p>Plataforma: {props.platform}</p>
        <p>Data da compra: {props.date}</p>
      </div>
    </PurchasesList>
  );
}

const PurchasesList = styled.div`
  position: relative;
  width: 95%;
  border-radius: 5px;
  background-color: #444444;
  display: flex;
  justify-content: left;
  padding: 5px;
  box-sizing: border-box;
  color: #f5f5f5;
  margin-bottom: 10px;
  div {
    margin: 5px;
    display: flex;
    flex-direction: column;
  }
  div img {
    width: 80px;
  }
  div p {
    margin: 2px;
  }
  div h1 {
    font-size: 22px;
    font-weight: bold;
  }
  span {
    font-weight: bold;
  }
`;
