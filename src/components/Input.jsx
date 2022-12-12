import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Error from './Error'
import { flushSync } from 'react-dom'

const Input = ({usuarioUrl, setUsuarioUrl}) => {

    const [usuario, setUsuario] = useState('')
    const [error, setError ] = useState(false)
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(usuario) 

    if([usuario].includes('')) {
        
        console.log('Ingresa un usuario')
        setError(true)
    } else {
        const usuarioSinEspacio = usuario.split(" ").join("")
        const URL = `https://api.github.com/users/${usuarioSinEspacio}`
     fetch(URL)
     .then(res => res.json())
     .then(data => {
        console.log(data)
        setUsuarioUrl([data])
        return
     })
    
     
     setError(false)
     

    }
     
       setUsuario('')
      
    
   }
  
  return (
    <>
       <form action="" onSubmit={handleSubmit} css={css`
           
           width: 730px;
           height: 69px;
           margin-bottom: 20px;
           @media(max-width:768px){
            display: flex;
            flex-direction: column;
            align-items: center;
           }
       
       `}>
         <input type="text" 
         onChange={(e) =>  setUsuario(e.target.value)}
         value={usuario}
         placeholder="Search Github userName"
         css={css`
         
            width: 730px;
            height: 69px;
            background: #FEFEFE;
            box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
            border-radius: 15px;
            border: none;
            margin-top: 10px;
            font-size: 20px;
            font-family: 'Space Mono';
            font-weight: 400;
            @media(max-width:768px){
                width: 350px;
                margin: 0px auto;
             



            }
          
            ::placeholder{
             font-family: 'Space Mono';
             font-style: normal;
             font-weight: 400;
             font-size: 18px;
             line-height: 25px;
             position: relative;
             left: 20px;
            }
         
         `}
         />
        
         <button type='submit' 
         css={css`
         
             position: relative;
             bottom: 62px;
             right: -600px; 
             width: 106px;
             height: 50px;
             border-radius: 10px;
             background-color: #0079FF;
             border: none;
             color: #fff;
            @media(max-width:768px){
                position: relative;
                left: 20px;
                top: 10px;
            }
         
         `}
         >Search</button>
       </form>
       {error && <Error>Todos los datos son obligatorios</Error>}
    </>
  )
}

export default Input