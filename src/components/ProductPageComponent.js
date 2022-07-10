import styled from "styled-components";

export default function PageBar(props){


    return(
        <Wrapper>
            <PageButton onClick={() => {
                if(props.page>0){
                props.setPage(props.page-1);
                }
                if(props.page>props.maxPage){
                    props.setPage(props.maxPage-1);
                }
            }}>
                <ion-icon name="caret-back-outline"></ion-icon>
            </PageButton>
            <h1>{props.page+1}</h1>
            <PageButton onClick={() => {
                if(props.page<props.maxPage){
                props.setPage(props.page+1);
                }
                if(props.page>props.maxPage){
                    props.setPage(props.maxPage-1);
                }
            }}><ion-icon name="caret-forward-outline"></ion-icon></PageButton>
        </Wrapper>
    );
}
const PageButton=styled.button`
background: none;
margin:0;
border-style: none;

ion-icon{
    font-size:30px;
}
`;
const Wrapper=styled.div`
border-radius: 5px;
padding:5px;
box-sizing: border-box;
display:flex;
justify-content: space-between;
align-items: center;
width:95%;
margin:0 auto 55px;
background-color: #efefef;
h1{
    font-size: 30px;
}
`;