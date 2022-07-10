import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import styled from "styled-components";
import React from "react";
import { useUserData } from "../contexts/UserDataContext";
import axios from "axios";
import HistoryList from "./HistoryComponent";

export default function History() {
  const [{ token }] = useUserData();

  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    const url = "https://gamemaster-project14.herokuapp.com/history";
    //const url = "http://localhost:5000/history";
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(url, auth).then((res) => {
      setHistory(res.data);
    });
  }, []);

  function NoPurchases() {
    return (
      <NoPurchasesList>Você ainda não realizou nenhuma compra!</NoPurchasesList>
    );
  }

  function Purchases() {
    return history.map((e) => (
      <HistoryList
        key={e._id}
        id={e._id}
        name={e.name}
        image={e.image}
        platform={e.platforms}
        date={e.date}
      />
    ));
  }

  return (
    <>
      <TopBar />
      <Container>
        {history.length >= 1 ? <Purchases /> : <NoPurchases />}
      </Container>
      <BottomBar />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoPurchasesList = styled.div`
  font-size: 23px;
  width: 95%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #f5f5f5;
  font-weight: bold;
`;
