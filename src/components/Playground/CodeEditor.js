import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { bespin } from "@uiw/codemirror-theme-bespin";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";


import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";

const CodeEditor = ({
  currentCode,
  currentLanguage,
  setCurrentCode,
  currentTheme,
}) => {

  const [theme, setTheme] = useState(githubDark);
  const [language, setLanguage] = useState(javascript);

  useEffect(() => {
    if (currentLanguage === "javascript") {
      setLanguage(javascript);
    } else if (currentLanguage === "python") {
      setLanguage(python);
    } else if (currentLanguage === "java") {
      setLanguage(java);
    } else if (currentLanguage === "cpp") {
      setLanguage(cpp);
    }
  }, [currentLanguage]);

  useEffect(()=>{
    if(currentTheme === "githubDark"){
        setTheme(githubDark);
    }
    else if(currentTheme==="githubLight"){
        setTheme(githubLight);
    }
  })
  
  return (
    <div>CodeEditor</div>
  )
}

export default CodeEditor