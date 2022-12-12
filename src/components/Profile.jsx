import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'




const ContenedorAvatar = styled.div`

        width: 730px;
        height: 419px;
        background:#f2f2f2;
        box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
        border-radius: 15px;
       
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

`

const ImgAvatar = styled.img`
   
      width: 117px;
      height: 117px;
      border-radius: 50%;
      position: relative;
      bottom: 50px;
      left: 48px;

`

const InfoAvatar = styled.div`
      
       width: 480px;
       height: 300px;
      
       

`

const AvatarHeader = styled.div`
   
       width: 480px;
       height: 117px;
      
      

`






const Profile = ({usuarioUrl}) => {

 const [usuarioInicial, setUsuarioInicial] = useState([])

    useEffect(() => {

        fetch('https://api.github.com/users/marco')
        .then(res => res.json())
        .then(data => {
             setUsuarioInicial([data])
        })
   
   },[])

   console.log(usuarioInicial)
  return (
   <div>


   {
    usuarioUrl < 1 ? (
        usuarioInicial.map((e,i) => (
           <ContenedorAvatar key={e.id}>
              <ImgAvatar src={e.avatar_url}></ImgAvatar>
              <InfoAvatar css={css`
              
                   
                   
              `}>
                  <AvatarHeader> 
                     <div css={css`
                     
                        display: flex;
                        width:90% ;
                        flex-direction: column;
                     
                     `}>
                     <p>{e.name}</p>
                     <p>@{e.name}</p>
                     {
                        e.bio === null ? (<p css={css`max-width:150px;
                         width: 150px;
                         font-size: 15px;
                        `}>This user dont have a bio</p>):(<p css={css` 
                           max-width: 250px;
                           width: 250px;
                           font-size: 15px;
                        
                        `}>{e.bio}</p>)
                     }

                     </div>
                    
                     <p css={css`
                     

                      position: relative;
                      left:50%;
                      bottom: 200px;
                      font-size: 12px;
                     
                     `}>Joined:{e.created_at}</p>
                     <p>{e.location}</p>
                  </AvatarHeader>
              </InfoAvatar>
           </ContenedorAvatar>
        ))
       ) : (
        
           usuarioUrl.map((e,i) => (
               <ContenedorAvatar key={e.id}>
               <ImgAvatar src={e.avatar_url}></ImgAvatar>
               <InfoAvatar>
                   <AvatarHeader> 
                    <div css={css`
                        display: flex;
                        width:90% ;
                        flex-direction: column;
                    
                    
                    `}>
                    <p>{e.name}</p>
                    <p>@{e.name}</p>
                    {
                        e.bio === null ? (<p css={css``}>This user dont have a bio</p>):(<p>{e.bio}</p>)
                     }

                    </div>
                     
                     <p>Joined:{e.created_at}</p>
                     <p>{e.location}</p>
                   </AvatarHeader>
               </InfoAvatar>
            </ContenedorAvatar>
   
           ))
        )
   }
   
    
    
   
 
   </div>
  )
}

export default Profile