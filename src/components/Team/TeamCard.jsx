import React from 'react'
import Atropos from 'atropos/react'
import sammy from '../../Images/sammy.png'
import webdev from '../../Images/webdev.jpg'


const TeamCard = () => {

    const ThreeDBoxStyle = {
      borderRadius: "8px",
      background: "linear-gradient(315deg, #e6e6e6, #ffffff)",
      boxShadow: "35px 35px 70px #c9c9c9, -35px -35px 70px #ffffff",
      
    };

const ThreeDFrontBox = {
    borderRadius: '8px',
    background: 'linear-gradient(145deg, #3b3b3b, #474747)',
    boxShadow:  '35px 35px 70px #343434, -35px -35px 70px #505050',
}
  return (
    <React.Fragment>
      <Atropos 
      activeOffset={40}
      shadowScale={-2.05}
      onEnter={()=> console.log('Enter')}
      onLeave={()=> console.log('Enter')}
      onRotate={(x,y)=> console.log('Rotate', x, y)}
      className='h-[24rem] w-96 relative overflow-hidden bg-gray-950' 
      style={ThreeDBoxStyle}
      >
        <img src={webdev} alt="" data-atropos-offset='-5' className='absolute h-full w-full object-cover object-center rounded-lg'/>
        <img src={sammy} alt="" data-atropos-offset='0' className='relative h-full w-full object-contain object-center'/>
        <h1 data-atropos-offset='5'  className='relative z-10 bottom-24 font-bold text-white text-3xl p-2 border text-center bg-black opacity-70' style={ThreeDFrontBox}>Card 1</h1>
      </Atropos>
    </React.Fragment>
  )
}

export default TeamCard
