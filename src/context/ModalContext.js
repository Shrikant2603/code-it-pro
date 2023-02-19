import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const initialModalFields = {
    show: false,
    modalType: "",
    identifiers: {
      folderID: "",
      cardID: "",
    },
  };

  const [isOpenModal, setIsOpenModal] = useState({ ...initialModalFields });

  const openModal = (value) => {
    setIsOpenModal(value);
  };

  const closeModal = (value) => {
    setIsOpenModal({ ...initialModalFields });
  };

  const ModalFeatures = {
    isOpenModal: isOpenModal,
    openModal: openModal,
    closeModal: closeModal,
  };
  return (
    <ModalContext.Provider value={ModalFeatures}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
