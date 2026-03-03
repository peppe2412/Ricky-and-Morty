import { useState, useEffect } from "react";

export default function Typewriter({ text, delay }) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    if(index < text.length){
        const timeout = setTimeout(()=>{
            setCurrentText(prevText => prevText + text[index])
            setIndex(prevIndex => prevIndex + 1)
        }, delay)

        return () => clearTimeout(timeout)

    }
  }, [index, delay, text])

  return <span>{currentText}</span>

}
