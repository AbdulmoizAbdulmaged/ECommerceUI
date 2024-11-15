import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import { mobile } from '../Responsive';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  ${mobile({flexDirection:'column',width:'350px',})}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ebe1e1;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;
const Image = styled.img`
height: 80%;
${mobile({height:'150px',})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 50px;
  ${mobile({fontSize:'25px'})}
  
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 10px 0px;
  font-weight: 500;
  letter-spacing: 3px;

`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
${mobile({fontSize:'15px'})}

`;

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const [products,setProducts] = useState([]);

  
  
  const handleClick = (direction)=>{
  if(direction === "left"){
    setSlideIndex(slideIndex > 0 ? slideIndex -1 : 1)
  }
  else
  {
    setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
  }
  
  
  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
       <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(

        
       <Slide bg={item.bg} key={item.id}> 
        <ImgContainer>
         <Image src={item.img}/>
        </ImgContainer>

        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
       ))}
       </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("left")}>
        <ArrowRightOutlined/>
      </Arrow>

    </Container>
  )
}

export default Slider
