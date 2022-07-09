import styled from "styled-components";
import React from "react";
import { useUserData } from "../contexts/UserDataContext";
import axios from "axios";

export default function CartList({
  image,
  name,
  platform,
  price,
  id,
  cart,
  setCart,
}) {
  const [{ token }] = useUserData();

  function deleteCart(id) {
    //const url = "https://gamemaster-project14.herokuapp.com/cart";
    const url = `http://localhost:5000/cart/${id}`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const backupListedCart = [...cart];
    //optimistic update
    setCart(cart.filter((e) => e._id !== id));
    axios.delete(url, auth).catch((err) => {
      console.log("ops, não foi possível deletar o seu produto");
      setCart(backupListedCart);
    });
  }

  return (
    <CartProducts>
      <div>
        <img src={image} alt="Game Cover"></img>
      </div>
      <div>
        <h1>
          <p>{name}</p>
        </h1>
        <p>Plataforma: {platform}</p>
        <p>
          Preço: <span>R${Number(price).toFixed(2)}</span>
        </p>
      </div>
      <DeleteButton onClick={() => deleteCart(id)}>
        <ion-icon name="trash-outline"></ion-icon>
      </DeleteButton>
    </CartProducts>
  );
}

const CartProducts = styled.div`
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

const DeleteButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: none;
  border-style: none;
  ion-icon {
    font-size: 30px;
    color: #f5f5f5;
  }
`;
