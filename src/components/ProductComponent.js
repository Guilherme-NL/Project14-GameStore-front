import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductModal from "./ProductModal";




export default function Product(props){
  const navigate = useNavigate();
  const [selectedPlatform,setSelectedPlatform]=useState(props.platforms[0]);

  function buttonHandler(){
    props.addToCart(props.productId,selectedPlatform);
  }
  return(
    <ProductWrapper>
      <div onClick={()=>navigate("/products/"+props.productId)}><img src={props.image} alt="Game Cover"></img></div>
      <div>
        <h1 onClick={()=>navigate("/products/"+props.productId)}><p>{props.name}</p></h1>
        <p>Released: {props.released}</p>
        <p>Price: R${Number(props.price).toFixed(2)}</p>
        <p>Rated: {props.rated}</p>
        <p><label>Platform: </label>
        <select onChange={(e)=>setSelectedPlatform(e.target.value)}>
          {props.platforms.map((platform,index) =>
              <option value={platform} key={index}> {platform}</option>
          )}
        </select></p>
      </div>
      <NavigationButton onClick={buttonHandler}><ion-icon name="cart-outline"></ion-icon></NavigationButton>

    </ProductWrapper>
  )
};
const ProductWrapper=styled.div`
position:relative;
width:95%;
border-radius: 5px;
background-color: #444444;
display: flex;
justify-content: left;
padding: 5px;
box-sizing: border-box;
color:#f5f5f5;
margin-bottom: 10px;
div{
  margin: 5px;
  display:flex;
  flex-direction: column;
}
div img{
  width:100px
}
div p{
  margin:2px;
}
div h1{
  font-size:22px;
}
div select{
    margin: 0 5px;
    background-color: #f5f5f5;
    border-style: none;
    border-radius: 3px;
}
`;
const NavigationButton = styled.button`
position:absolute;
bottom:0;
right:0;
background: none;
border-style: none;
color: #f5f5f5;

ion-icon{
    font-size:30px;
}
`;