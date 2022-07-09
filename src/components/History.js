import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import styled from "styled-components";
import React from "react";
import { useUserData } from "../contexts/UserDataContext";
import axios from "axios";

export default function History() {
  const [{ token }] = useUserData();

  const [history, setHistory] = React.useState();

  React.useEffect(() => {
    //const url = "https://gamemaster-project14.herokuapp.com/history";
    const url = "http://localhost:5000/history";
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(url, auth).then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <>
      <TopBar />
      <Container>{}</Container>
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
