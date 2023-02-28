import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const LeftPaneHomeScreen = () => {
  const {openModal} = useContext(ModalContext)
  return (
    <div className="border-2 border-black h-screen bg-black flex justify-end ">
      <div className="mx-auto flex flex-col items-center justify-center gap-3">
        <img src="./logo.png" alt="logo" />
        <h3 className="font-semibod text-white text-4xl"><span className="font-bold">Code-It</span> Pro</h3>
        <h3 className="font-semibod text-white text-2xl opacity-[.7]">Code. Compile. Debug.</h3>
        <button
          className="flex items-center justify-between py-1 px-6 w-full  bg-white shadow-white
          rounded-full ease-in-out duration-500 hover:scale-105 
          "
          onClick={()=>openModal({
            show: true,
            modalType: 3,
            identifiers: {
              folderId: "",
              cardID: "",
            },
          })}
        >
          <span className="font-bold text-3xl">+</span> <span className="text-base">Create new Playground</span> 
        </button>
      </div>
    </div>
  );
};

export default LeftPaneHomeScreen;
