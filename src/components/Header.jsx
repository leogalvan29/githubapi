import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Swtcher = styled.div`
  
    width: 78px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

`


const Header = () => {

  let nombre = "leo galvan 20"
  let nombreJunto = nombre.split(" ").join("")
  console.log(nombreJunto)
  return (

    <div css={css`
    
       max-width:730px;
       width: 730px;
       height:38px;
       display: flex;
       justify-content: space-between;
       border: 1px solid white;
       align-items: center;
       color: #222731;
       font-size: 20px;
       font-weight: 700;
    
    `}>

      <h2>Devfinder</h2> 
       <Swtcher>
          <p>Dark</p>

       </Swtcher>
    </div>
  )
}

export default Header