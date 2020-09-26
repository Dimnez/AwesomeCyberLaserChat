import Model from "./Model";

export default class ModelProviderService {

  private static model = new Model();

  public static getModel(): Model {
    return ModelProviderService.model;
  }

}