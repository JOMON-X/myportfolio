import React from 'react'
import styled from 'styled-components'



export default function Footer() {
  return (
    <>
      <StyledFooter>
        <div className='footer'>
            <h3>
                <span className='cr'> © ARES-X  | </span>
                <span className='ds'>Designed by</span> <span className='mj'>Mohammed jouhar</span>
                </h3>
        </div>
      </StyledFooter>
    </>
  )
}

const StyledFooter=styled.div`
    .footer{
        height: 100px;
        width: 100%;
        border-radius: 5px;
        
        background: rgba(0, 0, 0, 0);
        box-shadow: 0 0 10px rgb(68, 183, 203) ;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ds{
        color: white;
    }
    .mj{
        color: rgb(68, 183, 203);
        text-shadow: 0 0 5px rgb(68, 183, 203),
                     0 0 10px rgb(68, 183, 203);
    }
    .cr{
        color:rgb(68, 183, 203) ;
    }
`;