import {
    Aside,
    Container,
    Text,
    useMantineColorScheme
} from '@mantine/core';
import AceEditor from "react-ace";
import "./editor.css"

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import Sidebar from './_sidebar';
import { useEffect, useRef, useState } from 'react';

function useKey(key, cb){
    const callback = useRef(cb);

    useEffect(() => {
        callback.current = cb;
    })


    useEffect(() => {
        function handle(event){
            if(event.code === key){
                callback.current(event);
            } else if (key === 'ctrls' && event.key === 's' && event.ctrlKey) {
                callback.current(event);
            }
        }

        document.addEventListener('keydown',handle);
        return () => document.removeEventListener("keydown",handle)
    },[key])
}

export default function CodeEditor() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [code, setCode] = useState(String);


    useKey('ctrls', () => console.log('Ctrl+S fired!'));
    
    function onChange(newValue: any) {
        // console.log("change", newValue);
    }

    return (
        <Container px={0} size="xl" style={{backgroundColor: "red", height: "100%"}}>
            <AceEditor
                style={{ width: "100%", height: "100%" }}
                placeholder="Placeholder Text"
                mode="python"
                theme={colorScheme == "light" ? "github" : "monokai"}
                name="editor"
                // onChange={(code) => {setCode(code)}}
                fontSize={18}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                maxLines={Infinity}
                value={`
def test():
  return True`}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
            >
            <Sidebar code={code} />
        </Container>


    )
}