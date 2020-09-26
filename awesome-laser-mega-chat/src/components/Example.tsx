import React, {useEffect, useState} from 'react';
import './App.css';
import ButtonComponentContainer from "./ButtonComponentContainer";
import TextComponentContainer from "./TextComponentContainer";

const ExampleComponentWithState: React.FunctionComponent<{ defaultText: string }> = props => {
  // Default text from component props
  const { defaultText } = props;

  // internal state of this component. Initially set from defaultText prop
  const [text, setText] = useState<string>(defaultText);

  useEffect(() => {
    // Called on first render
    setText(defaultText);
    return () => {
      // called on unmount
    };
    // useEffect is retriggert by change of defaultText prop
  },[defaultText]);

  const onButtonClick = () => {
    // Change internal state
    setText("Gedrückt");
  };

  return (
    <div className="App">
      <ButtonComponentContainer onClick={onButtonClick} />
      <TextComponentContainer text={text} />
    </div>
  );
};

export default ExampleComponentWithState;
