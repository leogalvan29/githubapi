import { useEffect, useState } from 'react'
import Header from './components/Header'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from './components/Input'
import Profile from './components/Profile'




function App() {
 const [color, setColor ] = useState(true) 
 const [usuarioUrl , setUsuarioUrl] = useState([])



console.log(usuarioUrl)  


   




  


 

return (
    <div css={css`
    
        width: 90%;
        margin: 0px auto;
        display: flex;
        height: 800px;
        flex-direction: column;
         align-items: center;
         padding-top: 100px;
    
    `}>
     
       <Input
       usuarioUrl={usuarioUrl}
       setUsuarioUrl={setUsuarioUrl}
     
     
       />
       <Profile
       usuarioUrl={usuarioUrl}
       />
    </div>
  )
}

export default App
