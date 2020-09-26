import React, {FunctionComponent} from "react";
import ModelProviderService from "../model/ModelProviderService";
import {observer} from "mobx-react";

const TextComponentContainer: FunctionComponent<{}> = props => {
  const model = ModelProviderService.getModel();
  return <div>{model.text}</div>
};

export default observer(TextComponentContainer);