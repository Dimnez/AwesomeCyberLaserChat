import {observable} from "mobx";

export default class Model {

  @observable
  text: string = "Nicht gedrückt";
}