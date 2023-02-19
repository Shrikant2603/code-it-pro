import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const PlaygroundContext = createContext();

export const languageMap = {
  cpp: {
    id: 10,
    defaultCode:
      "#include <iostream>\n" +
      "using namespace std;\n\n" +
      "int main() {\n" +
      '\tcout << "Hello World!";\n' +
      "\treturn 0;\n" +
      "}",
  },
  java: {
    id: 11,
    defaultCode: `public class Main{
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
        }`,
  },
  python: {
    id: 12,
    defaultCode: `print("Hello World!")`,
  },
  javascript: {
    id: 13,
    defaultCode: `console.log("Hello World!")`,
  },
};

const PlaygroundProvider = ({ children }) => {
  const initialItems = {
    [uuid()]: {
      title: "DSA",
      playgrounds: {
        [uuid()]: {
          title: "Stack imp",
          language: "cpp",
          code: languageMap["cpp"].defaultCode,
        },
        [uuid()]: {
          name: "Array",
          language: "javascript",
          code: languageMap["javascript"].defaultCode,
        },
      },
    },
  };

  const [folders, setFolders] = useState(() => {
    let localData = localStorage.getItem("playgrounds-data");
    if (localData === null || localData === undefined) {
      return initialItems;
    }
    return JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("playgrounds-data", JSON.stringify(folders));
  }, [folders]);

  const deleteCard = (folderID, cardID) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      delete newState[folderID].playgrounds[cardID];
      return newState;
    });
  };

  const deleteFolder = (folderID) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      delete newState[folderID];
      return newState;
    });
  };

  const addFolder = (folderName) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderName,
        playgrounds: {},
      };
      return newState;
    });
  };

  const addPlayground = (folderID, PlaygroundName, language) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderID].playgrounds[uuid()] = {
        title: PlaygroundName,
        language: language,
        code: languageMap[language].defaultCode,
      };
      return newState;
    });
  };

  const addPlaygroundAndFolder = (folderName, playgroundName, cardLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderName,
        playgrounds: {
          [uuid()]: {
            title: playgroundName,
            language: cardLanguage,
            code: languageMap[cardLanguage].defaultCode,
          },
        },
      };
      return newState;
    });
  };

  const editFolderTitle = (folderID, newFolderTitle) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderID].title = newFolderTitle;
      return newState;
    });
  };

  const editPlaygroundTitle = (cardID, folderID, newPlaygroundTitle) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderID].playgrounds[cardID].title = newPlaygroundTitle;
      return newState;
    });
  };

  const savePlayground = (cardID, folderID, newCode, newLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderID].playgrounds[cardID].code = newCode;
      newState[folderID].playgrounds[cardID].language = newLanguage;
      return newState;
    });
  };

  const PlaygroundFeatures = {
    folders: folders,
    deleteCard: deleteCard,
    deleteFolder: deleteFolder,
    addFolder: addFolder,
    addPlayground: addPlayground,
    addPlaygroundAndFolder: addPlaygroundAndFolder,
    editFolderTitle: editFolderTitle,
    editPlaygroundTitle: editPlaygroundTitle,
    savePlayground: savePlayground,
  };
  return (
    <PlaygroundProvider value={PlaygroundFeatures}>
      {children}
    </PlaygroundProvider>
  );
};

export default PlaygroundProvider;