import {
  deleteUserDataInLocalStorage,
  useUserData,
} from "../contexts/UserDataContext";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

export default function TopBar() {
  const [{ name, image, token }, setUserData] = useUserData();
  const navigate = useNavigate();
  function logout() {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    //const requisition=axios.delete("https://gamemaster-project14.herokuapp.com/session", auth);
    const requisition = axios.delete("http://localhost:5000/session", auth);
    requisition.then((response) => {
      setUserData(null);
      deleteUserDataInLocalStorage();
      navigate("/");
    });
    requisition.catch((error) => {
      alert("Ocorreu um erro");
      console.log(error.data);
    });
  }
  return (
    <Container>
      <UserWrapper>
        <img src={image} alt="Profile"></img> <span>{name}</span>{" "}
      </UserWrapper>
      <LogOutButton onClick={logout}>
        <ion-icon name="log-out-outline"></ion-icon>
      </LogOutButton>
    </Container>
  );
}
const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;

  background-color: #efefef;
  ion-icon {
    font-size: 30px;
  }
  span {
    font-size: 20px;
    font-family: "Glegoo", serif;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogOutButton = styled.button`
  background: none;
  font-size: 30px;
  margin: 0;
  border-style: none;
`;
