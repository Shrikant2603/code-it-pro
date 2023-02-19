<<<<<<< HEAD
import { createContext, useState } from 'react'
=======
import React, { createContext, useState } from 'react'
>>>>>>> origin/master

export const ModalContext = createContext();


const ModalProvider = ({children}) => {

    const initialModalFields = {
        show:false,
        modalType:"",
<<<<<<< HEAD
        identifiers:{
=======
        identfiers:{
>>>>>>> origin/master
            folderID: "",
            cardID: ""
        }
    }

    const [isOpenModal, setIsOpenModal] = useState({...initialModalFields});

    const openModal = (value) =>{
      setIsOpenModal(value);
    }

    const closeModal = (value) =>{
      setIsOpenModal({...initialModalFields});
    }

    const ModalFeatures = {
<<<<<<< HEAD
      isOpenModal:isOpenModal,
      openModal: openModal,
      closeModal: closeModal,
=======
      isOpenModal,
      openModal,
      closeModal,
>>>>>>> origin/master
    }
  return (
    <ModalContext.Provider value={ModalFeatures}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;