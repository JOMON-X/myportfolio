import React from 'react'
import styled from 'styled-components'



export default function Button({text,handleclick}) {
  return (
    <>
  <StyledButton> <div onClick={handleclick}><a href="">{text}</a></div></StyledButton>
    </>
  )
}

const StyledButton = styled.div`
  
 div a {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    cursor: pointer;
 
}

div{
  width: fit-content;
    border-radius: 50px !important;
    background: rgba(0,0,0,0);
    border: 2px solid rgb(68, 183, 203);
    padding: 9px 25px;
    
}
div:hover{
    background-color: rgb(68, 183, 203);
    transition: all 0.4s ease 0s;
}

`;
