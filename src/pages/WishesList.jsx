import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Wishes from '../components/Wishes';
import Footer from '../components/Footer';


const Container = styled.div`
  
`;
const Title = styled.h1`
  margin: 20px;
`;
function WishesList() {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wishes/>
      <Footer/>
    </Container>
  )
}

export default WishesList
