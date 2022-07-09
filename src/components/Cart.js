import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import styled from "styled-components";
import React from "react";
import { useUserData } from "../contexts/UserDataContext";
import axios from "axios";
import CartList from "./CartComponent";
import Modal from "./Modal";

export default function Cart() {
  const [{ token }] = useUserData();
  const [cart, setCart] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);

  const sum = cart.reduce((accumulator, { price }) => {
    return accumulator + price;
  }, 0);

  React.useEffect(() => {
    //const url = "https://gamemaster-project14.herokuapp.com/cart";
    const url = "http://localhost:5000/cart";
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setCart(res.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });
  }, []);

  function NoCardProducts() {
    return (
      <NoCardList>
        Você ainda não possui nenhum item no seu carrinho!
      </NoCardList>
    );
  }

  function CardProducts() {
    return cart.map((e) => (
      <CartList
        key={e._id}
        id={e._id}
        name={e.name}
        image={e.image}
        platform={e.platforms}
        price={e.price}
        cart={cart}
        setCart={setCart}
      />
    ));
  }

  function confirmPurchase() {
    //const url = "https://gamemaster-project14.herokuapp.com/history";
    const url = "http://localhost:5000/history";
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const newCart = cart.map(({ _id, ...rest }) => {
      return rest;
    });
    const body = newCart;

    axios
      .post(url, body, auth)
      .then((response) => {
        console.log("Confirmed");
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });

    const urlDelet = "http://localhost:5000/cart";

    axios.delete(urlDelet, auth).catch((err) => {
      console.log("ops, não foi possível deletar o seu produto");
    });

    setOpenModal(true);
  }

  return (
    <>
      <TopBar />
      <Container>
        {cart.length >= 1 ? <CardProducts /> : <NoCardProducts />}
        <Total>Total: R${Number(sum).toFixed(2)}</Total>
        <button
          onClick={() => {
            confirmPurchase();
          }}
          style={{ display: cart.length >= 1 ? "block" : "none" }}
        >
          Confirmar a compra
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
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
  padding: 5px;

  button {
    width: 95%;
    height: 40px;
    font-size: 20px;
    font-family: "Glegoo", serif;
    color: #f5f5f5;
    background-color: #444444;
    border: 1px solid #444444;
    border-radius: 5px;
    font-weight: bold;
  }
`;

const Total = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #444444;
  margin-left: auto;
  margin-right: 8px;
  margin-top: 20px;
  margin-bottom: 25px;
`;

const NoCardList = styled.div`
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
