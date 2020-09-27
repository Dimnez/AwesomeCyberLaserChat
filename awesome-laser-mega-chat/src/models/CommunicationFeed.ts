import { getAllByPlaceholderText } from "@testing-library/react";
import {observable} from "mobx";

export default class CommunicationFeed {

  @observable
  messages: any[] = [];

  @observable
  channels: any[] = [];

  @observable
  activeChannel: any = null;

  @observable
  user: any=[];

  private dialogueProgress = {step: 0, running : false};

  printDialogue(messages:string[],timeout:number)
  {

    if(messages.length-1 >= this.dialogueProgress.step)
    {
      setTimeout(
        ()=>{
            this.receiveMessage({'sender': {'emoji': '🐌'}, 
            message : messages[this.dialogueProgress.step]})

            this.dialogueProgress.step++;
        },timeout*messages[this.dialogueProgress.step].length
      );
     
      setTimeout(()=>{this.printDialogue(messages,timeout)},
      timeout*messages[this.dialogueProgress.step].length);
    }
    else
    {
      this.dialogueProgress.step = 0;
      this.dialogueProgress.running = false;
    }
  }

  receiveMessage(data:any)
  {
    this.messages.push({
      metadata: {timestamp: new Date()},
      content: data
    });
  }

  join(channelIndex:number)
  {
    this.switchChannel(channelIndex);
    //this.sendMessage("joined the chat!");
  }

  switchChannel(channelIndex:number)
  {
      this.activeChannel = this.channels[channelIndex];
  }

  sendMessage(content:string)
  {
    if(this.activeChannel != null)
    {

      const msg = {sender: this.user, message:content};

      this.activeChannel.trigger("client-message",msg);

      //receive the same message we've just sent
      //just to show it in our feed
      this.receiveMessage(msg);

    }
    else
    {
      console.exception("please select a channel");
    }
  }


}