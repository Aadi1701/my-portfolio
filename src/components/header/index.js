import React from 'react'
import './styles.css'
import Profile from '../profile'

const Header = () => {
  return (
    <>
    
    <div  className='container'>
        {/* <div className='image-container'>
            <img className='image' src='https://ninjasfiles.s3.amazonaws.com/asset_0000000000000020_1549743985_macbook_mouse.jpg' alt='cover'/>
        </div> */}
       <img className='header-image' src="https://images.unsplash.com/photo-1647619967257-a837dc7c332e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
       <h1 className='heading'>Aditya Kumar</h1>
       <div className='profile'>
       <img className='profile-image' src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
       </div>
       <Profile/>
       <p className='about'>I believe that I can be a good team player with the ability to work under minimum guidance especially when carrying
          out challenging assignment. I consider myself as a very ambitious, motivated, career oriented person,
          willing to accept challenges, energetic and results oriented, with excellent leadership abilities,
          and an active and hardworking person who is patient and diligent, with great adaptability to changing working conditions.</p>
       
    </div>
    </>
  )
}

export default Header