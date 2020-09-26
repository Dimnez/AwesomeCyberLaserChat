import React, {FunctionComponent} from "react";
import ModelProviderService from "../model/ModelProviderService";

const UpdateModelTextButton: FunctionComponent<{}> = props => {

  const onButtonClick = () => {
    const model = ModelProviderService.getModel();
    model.text = "Gedrückt";
  };

  return <button onClick={onButtonClick} type={"button"}>Drueck mich!</button>
};

export default UpdateModelTextButton;