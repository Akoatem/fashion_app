import { Badge, Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { login } from '../redux/apiCalls'



// make use of style component
const Container = styled.div`
      height: 60px
      ${mobile({ height: "50px" })}
`;

// create wrapper to divide the navbad
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
//*****left side *********
const Left = styled.div`
     flex: 1;
     display:flex;
     align-items:center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
      border: 0.5px solid lightgrey;
      display:flex;
      align-items:center;
      margin-left:25px;
      padding:5px
`
const Input = styled.input`
   border:none;
   ${mobile({ width: "50px" })}
   

`
// *******Center side ********
const Center = styled.div`
     flex: 1;
     text-align: center;
`
const Logo = styled.h1`
     font-weight: bold;
     ${mobile({ fontSize: "24px" })}
     
`

//*******Right side  *********
const Right = styled.div`
      flex: 1;
      display:flex;
      align-items: center;
      justify-content: flex-end;
      ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItems = styled.div`
      font-size:14px;
      cursor:pointer;
      margin-left:25px;
      ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const NavBar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
 // console.log(quantity);


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <Search style={{ color: 'grey', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Link style={{textDecoration:"none"}}to="/">
        <Center>
          <Logo >FASHION STORE</Logo>
        </Center>
        </Link>
        
        <Right>
        <Link style={{textDecoration:"none"}} to="/about"><MenuItems>About</MenuItems></Link>
          <Link style={{textDecoration:"none"}} to="/products/category"><MenuItems>Products</MenuItems></Link>
          <Link style={{textDecoration:"none"}} to="/contact"><MenuItems>Contact</MenuItems></Link>
          
          <Link style={{textDecoration:"none"}} to="/register"><MenuItems>Register</MenuItems></Link>
          <Link style={{textDecoration:"none"}} to="/login"><MenuItems>Login</MenuItems></Link>

          <Link to="/cart">
          <MenuItems>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar