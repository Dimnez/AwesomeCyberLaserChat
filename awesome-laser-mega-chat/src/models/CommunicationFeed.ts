import {observable} from "mobx";

export default class CommunicationFeed {

  @observable
  messages: string[] = [];
  channels: any[] = [];
}