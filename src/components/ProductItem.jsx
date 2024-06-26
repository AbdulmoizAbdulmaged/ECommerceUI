import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0,0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color: white;
position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
      border-color: #e9f5f5;
      transform: scale(1.1);
  }

`
const ProductItem = ({item}) => {
  return (
   <Container>
     <Circle/>
     <Image src={item.img}/>
     <Info>
      <Icon>
         <ShoppingCartOutlined/>
      </Icon>
      <Icon>
        <Link to={`/product/${item._id}`}>
        <SearchOutlined />
        </Link>
        
      </Icon>
      <Icon>
         <FavoriteBorderOutlined/>
      </Icon>
     </Info>
   </Container>
  )
}

export default ProductItem
