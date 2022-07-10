import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

export default function ProductById(){
    const {productId}=useParams();
    const [product, setProduct] = useState([]);
    const [platforms, setPlatforms]=useState("");
    const [genres, setGenres]=useState("");


    function requestProductList() {
        const requisition = axios.get(
          "https://gamemaster-project14.herokuapp.com/products/" +
            productId
        );
        //*/
        /* const requisition = axios.get(
           "http://localhost:5000/products/" +
            productId
         );
        // */
        requisition.then((response) => {
            setProduct(response.data);
            console.log(response.data)
            const combine=response.data.platforms.join(", ");
            setPlatforms(combine);    
            const combineGenre=response.data.genre.join(", ");
            setGenres(combineGenre);
        });
        requisition.catch((error) => {
          alert("Ocorreu um erro");
          console.log(error.data);
        });
      }
      useEffect(requestProductList, []);
    return(
    <>
    <TopBar />
    <ProductWrapper>
      <div><img src={product.image} alt="Game Cover"></img></div>
      <div>
        <h1><p>{product.name}</p></h1>

        <p>Released: {product.released}</p>
        <p>Price: R${Number(product.price).toFixed(2)}</p>
        <p>Rated: {product.rated}</p>
        <p>Platforms: {platforms}</p>
        <p>Genres: {genres}</p>
        <p>Description: {product.description}</p>
      </div>
    </ProductWrapper>
    <BottomBar />
    </>);
};

const ProductWrapper=styled.div`
position:relative;
width:95%;
border-radius: 5px;
background-color: #444444;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
box-sizing: border-box;
color:#f5f5f5;
margin:55px auto 55px;
div{
  margin: 5px;
  display:flex;
  flex-direction: column;
}
div img{
  width:100px;
  border-radius: 5px;
}
div p{
  margin:2px 2px 5px;
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
