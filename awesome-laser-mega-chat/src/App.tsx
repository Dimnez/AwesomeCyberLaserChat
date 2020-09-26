import React, {useState} from 'react';
import './App.css';
import ButtonComponentContainer from "./components/ButtonComponentContainer";
import TextComponentContainer from "./components/TextComponentContainer";

function App() {

  const [text, setText] = useState<string>("Nicht gedrückt");

  const onButtonClick = () => {
    setText("Gedrückt");
  };

  return (
    <div className="App">
     <ButtonComponentContainer onClick={onButtonClick} />
     <TextComponentContainer text={text} />
    </div>
  );
}

export default App;
