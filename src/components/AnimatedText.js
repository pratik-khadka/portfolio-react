import React from 'react'
import { useDencrypt } from "use-dencrypt-effect";
import '../App.css'


const values = ["Evolving", "Learning", "Living", "Coding"];

const TextAnimation = () => {
    const { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      const action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 1500);
  
      return () => clearInterval(action);
    }, []);
  
    return <div className="animated-text">{result} Everyday!</div>;
  };

export default TextAnimation;

