import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import axios from "axios"
import { BASE_URL } from './utils/config';
//import { useHistory } from 'react-router-dom';

const KEY = "pk_test_f2XjZfECxFoNO2rZNDEjFIp900EAtoRj4p"
const Container = styled.div`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
`
const Button = styled.button`
        border: none;
        width: 120px;
        border-radius: 5px;
        padding:20px;
        background-color: black;
        color: white;
        font-weight: 600;
        cursor: pointer;
`
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    //const history = useHistory();

    const onToken = (token)=>{
        setStripeToken(token)
       // console.log(token);
    }

     useEffect(() => {
      const makeRequest = async()=>{
        try {
         const res = await axios.post(
            `${BASE_URL}/checkout/payment`,
            {
              tokenId: stripeToken.id,
              amount: 2000,
           }
           );
           console.log(res.data);
           //history.push("/success")
        } catch (err) {
            console.log(err);
        }
      }
      stripeToken && makeRequest()
    }, [stripeToken])
    
    return (
       <Container>
       {stripeToken ? (<span>Processing. please wait....</span>
       ):(
        <StripeCheckout 
            name="Fashion Store" 
            image=""
            billingAddress
            shippingAddress
            description=' Your total is $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}
         >
         <Button>
            Pay Now
         </Button>
         </StripeCheckout>
       )}   
       </Container>      
    )
}

export default Pay