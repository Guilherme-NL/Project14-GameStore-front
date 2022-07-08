import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BottomBar(){
    const navigate = useNavigate();
    function handleCart(){
        navigate("/cart");
    }
    function handleProducts(){
        navigate("/products");
    
    }
    function handleHistory(){
        navigate("/history");   
    }
       return(
        <Container>
            <NavigationButton onClick={handleCart} ><ion-icon name="cart-outline"></ion-icon></NavigationButton>
            <NavigationButton onClick={handleProducts} ><ion-icon name="pricetags-outline"></ion-icon></NavigationButton>
            <NavigationButton onClick={handleHistory} ><ion-icon name="receipt-outline"></ion-icon></NavigationButton>

        </Container>
    );
}
const Container=styled.div`
display:flex;
justify-content: space-between;
align-items: center;
position:fixed;
bottom:0;
left:0;
right:0;
width:100%;
height: 50px;
padding: 5px;
box-sizing: border-box;
background-color: #efefef;
a{
    text-decoration: none;
    font-family: "Glegoo", serif;
    color:black;
}
`;
const NavigationButton = styled.button`
background: none;
margin:0;
border-style: none;
ion-icon{
    font-size:30px;
}
`;