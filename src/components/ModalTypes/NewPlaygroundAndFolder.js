import React, { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { ModalContext } from "../../context/ModalContext";
import { PlaygroundContext } from "../../context/PlaygroundContext";

const NewPlaygroundAndFolder = () => {
  const { closeModal } = useContext(ModalContext);
  const { addPlaygroundAndFolder } = useContext(PlaygroundContext);
  const [folderTitle, setFolderTitle] = useState("");
  const [cardTitle, setCardTitle] = useState("");

  const languageOptions = [
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
    { value: "java", label: "java" },
    { value: "cpp", label: "cpp" },
  ];

  const [language, setLanguage] = useState(languageOptions[0]);
  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };
  return (
    <>
      <div className="flex flex-row justify-end p-4 ">
        <RxCross1 className="cursor-pointer" onClick={() => closeModal()} />
      </div>
      <div className="px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6">
        <h2> Create a new PlayGround & new Folder</h2>
        <input
          type="text"
          value={folderTitle}
          onChange={(e) => setFolderTitle(e.target.value)}
          placeholder="Please enter a folder title"
          className="border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"
        />
        <input
          type="text"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          placeholder="Please enter a playground title"
          className="border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"
        />
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button
          className="p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg"
          onClick={() => {
            addPlaygroundAndFolder(folderTitle, cardTitle, language.value);
            closeModal();
          }}
        >
          Create Folder & PlayGround
        </button>
      </div>
    </>
  );
};

export default NewPlaygroundAndFolder;
