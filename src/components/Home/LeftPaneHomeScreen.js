import React from 'react'

const LeftPaneHomeScreen = () => {
  return (
    <div className='border-2 border-black h-screen bg-black flex justify-end '>
        <div className='mx-auto flex flex-col items-center justify-center gap-3'>
            <img src="./logo.png" alt="logo" />
            <h3 className='font-semibod text-white'>Code-It Pro</h3>
            <h3 className='font-semibod text-white'>Code. Compile. Debug.</h3>
        </div>
    </div>
  )
}

export default LeftPaneHomeScreen