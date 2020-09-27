import CommunicationFeed from "./CommunicationFeed";

export default class CommunicationFeedProviderService {

  private static model = new CommunicationFeed();

  public static getCommunicationFeed(): CommunicationFeed {
    return CommunicationFeedProviderService.model;
  }

}