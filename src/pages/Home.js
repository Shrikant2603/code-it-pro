import React, { useContext } from 'react'
import LeftPaneHomeScreen from '../components/Home/LeftPaneHomeScreen'
import RightPaneHomeScreen from '../components/Home/RightPaneHomeScreen'
import Modal from '../components/Modal'
import { ModalContext } from '../context/ModalContext'

const Home = () => {
  const { isOpenModal } = useContext(ModalContext);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='sm:w-full md:w-full w-5/12'>
            <LeftPaneHomeScreen/>
        </div>
        <div className='sm:w-full md:w-full w-7/12'>
            <RightPaneHomeScreen/>
        </div>
        {isOpenModal.show && <Modal />}
    </div>
  )
}

export default Home