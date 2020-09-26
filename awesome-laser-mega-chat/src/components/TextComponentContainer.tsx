import React, {FunctionComponent} from "react";

const TextComponentContainer: FunctionComponent<{ text: string }> = props => {
  const { text } = props;

  return <div>{text}</div>
};

export default TextComponentContainer;