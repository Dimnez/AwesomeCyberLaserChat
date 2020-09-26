import React, {FunctionComponent} from "react";

const ButtonComponentContainer: FunctionComponent<{ onClick: () => void }> = props => {
  const { onClick } = props;

  return <button onClick={onClick} type={"button"}>Drueck mich!</button>
};

export default ButtonComponentContainer;