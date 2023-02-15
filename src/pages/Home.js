import React from 'react'
import LeftPaneHomeScreen from '../components/Home/LeftPaneHomeScreen'
import RightPaneHomeScreen from '../components/Home/RightPaneHomeScreen'

const Home = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='sm:w-full md:w-full w-5/12'>
            <LeftPaneHomeScreen/>
        </div>
        <div className='sm:w-full md:w-full w-7/12'>
            <RightPaneHomeScreen/>
        </div>
    </div>
  )
}

export default Home