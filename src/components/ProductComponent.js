import styled from "styled-components";
import React from "react";

export default function Product(props){
  function addToCart(){
  };
  return(
    <ProductWrapper>
      <div><img src={props.image} alt="Game Cover"></img></div>
      <div>
        <h1><p>{props.name}</p></h1>
        <p><label>Platform: </label>
        <select>
          {props.platforms.map((platform,index) =>
              <option value={platform} key={index}> {platform}</option>
          )}
        </select></p>
        <p>Released: {props.released}</p>
        <p>Price: R${Number(props.price).toFixed(2)}</p>
        <p>Rated: {props.rated}</p>
      </div>
      <NavigationButton onClick={addToCart}><ion-icon name="cart-outline"></ion-icon></NavigationButton>
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
`;
const NavigationButton = styled.button`
position:absolute;
bottom:0;
right:0;
background: none;
border-style: none;
ion-icon{
    font-size:30px;
    color: #f5f5f5;
}
`;