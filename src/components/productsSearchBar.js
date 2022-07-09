import styled from "styled-components";

export default function SearchBar(props){


    return(
        <BarWrapper>
            <div>
                <label>Sort By
                <select onChange={(e)=>props.search.setSearchCategory(e.target.value)}>
                    <option value="name">Title</option>
                    <option value="genre">Genre</option>
                    <option value="rated">Rating</option>
                    <option value="price">Price</option>
                    <option value="released">Release</option>
                </select>
                <select onChange={(e)=>props.search.setSearchOrder(e.target.value)}>
                    <option value="-1">Descending</option>
                    <option value="1">Ascending</option>
                </select>
                </label>
            <input placeholder="Search" onChange={(e)=>{
                const term=e.target.value;
                props.search.setSearchTerm(term.toLowerCase())}}></input>

            </div>
            <SearchButton onClick={props.requestProductList}><ion-icon name="search-outline"></ion-icon></SearchButton>

        </BarWrapper>
    );
}
const BarWrapper=styled.div`
position:relative;
width:95%;
border-radius: 5px;
background-color: #444444;
display: flex;
padding: 5px;
box-sizing: border-box;
color:#f5f5f5;
margin: 55px auto 10px;
justify-content: space-between;
input{
    background-color: #f5f5f5;
    border-style: none;
    border-radius: 5px;
    padding-left:5px;
    box-sizing: border-box;
}
div{
    display: flex;
    flex-direction: column;
    width:300px;
}
div select{
    margin: 0 5px 5px;
    background-color: #f5f5f5;
    border-style: none;
    border-radius: 5px;
}
`;
const SearchButton = styled.button`
background-color: #efefef;
border-radius: 5px;
margin:0;
border-style: none;
ion-icon{
    font-size:30px;
    color: #444444;
}
`;