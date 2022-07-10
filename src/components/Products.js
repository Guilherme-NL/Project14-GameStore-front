import { useUserData } from "../contexts/UserDataContext";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import PageBar from "./ProductPageComponent";
import styled from "styled-components";
import axios from "axios";
import Product from "./ProductComponent";
import { useState, useEffect } from "react";
import SearchBar from "./productsSearchBar";

export default function Products() {
  const [{ token }] = useUserData();
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchOrder, setSearchOrder] = useState("-1");
  const [page,setPage]=useState(0);
  const [maxPage,setMaxPage]=useState(1);

  const search = {
    searchTerm,
    setSearchTerm,
    searchCategory,
    setSearchCategory,
    searchOrder,
    setSearchOrder,
  };
  function requestProductList() {
    const requisition = axios.get(
      "https://gamemaster-project14.herokuapp.com/products?searchTerm=" +
        searchTerm +
        "&searchCategory=" +
        searchCategory +
        "&searchOrder=" +
        searchOrder +
        "&page=" +
        page
    );
    //*/
     /*const requisition = axios.get(
       "http://localhost:5000/products?searchTerm=" +
         searchTerm +
         "&searchCategory=" +
         searchCategory +
         "&searchOrder=" +
         searchOrder +
         "&page=" +
         page
     );
    // */
    requisition.then((response) => {
      setProductList(response.data);
      setMaxPage(Math.ceil(response.data.length/10));
    });
    requisition.catch((error) => {
      alert("Ocorreu um erro");
      console.log(error.data);
    });
  }
  useEffect(requestProductList, [page]);

  function addToCart(productId, selectedPlatform) {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const reqBody = {
      productId: productId,
      platform: selectedPlatform,
    };
    const requisition = axios.post(
      "https://gamemaster-project14.herokuapp.com/cart",
      reqBody,
      auth
    );
    //*/
    //const requisition = axios.post("http://localhost:5000/cart", reqBody, auth);
    requisition.then((response) => {
      console.log("Posted");
      //navigate('/');
    });
    requisition.catch((error) => {
      alert("Ocorreu um erro");
      console.log(error.data);
    });
  }

  return (
    <>
      <TopBar />
      <SearchBar search={search} requestProductList={requestProductList} />
      <Container>
        {productList.map((product) => (
          <Product
            key={product._id}
            productId={product._id}
            name={product.name}
            image={product.image}
            platforms={product.platforms}
            rated={product.rated}
            price={product.price}
            released={product.released}
            addToCart={addToCart}
          />
        ))}
      </Container>
      <PageBar page={page} setPage={setPage} maxPage={maxPage} requestProductList={requestProductList}/>
      <BottomBar />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  margin: 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
