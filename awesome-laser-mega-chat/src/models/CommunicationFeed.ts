import { getAllByPlaceholderText } from "@testing-library/react";
import { observable } from "mobx";
import Pusher from 'pusher-js';

export default class CommunicationFeed {

  @observable
  messages: any[] = [];

  @observable
  channels: any[] = [];

  @observable
  activeChannel: any = null;

  @observable
  user: any = null;

  private dialogueProgress = { step: 0, running: false };

  async connectToPusher() {
    Pusher.logToConsole = true;

    const pusher = await new Pusher('11b4ad3a39f15ba40603', {
      cluster: 'eu',
      authEndpoint: 'https://pacific-garden-77198.herokuapp.com/pusher/auth'
    });

    const channel = await pusher.subscribe('private-channel');
    const feed = this;

    await channel.bind('pusher:subscription_succeeded', function () {
      feed.channels.push(channel);
      feed.join(0);
      feed.printDialogue([
        "Oh!",
        "You're earlier than I expected 🙈",
        "✨🎉 WELCOME 🥳🎈",
        "👉 Just select and an emoji and start chatting"
      ], 120);
    });

  await channel.bind('client-message',
      (data: any) => { feed.receiveMessage(data); });
  }

  printDialogue(messages: string[], timeout: number) {
    if (messages.length - 1 >= this.dialogueProgress.step) {
      setTimeout(
        () => {
          this.localBotMessage(messages[this.dialogueProgress.step]);

          this.dialogueProgress.step++;
        }, timeout * messages[this.dialogueProgress.step].length
      );

      setTimeout(() => { this.printDialogue(messages, timeout) },
        timeout * messages[this.dialogueProgress.step].length);
    }
    else {
      this.dialogueProgress.step = 0;
      this.dialogueProgress.running = false;
    }
  }

  localBotMessage(content: string) {
    this.receiveMessage(
      { 'sender': { 'emoji': '🐌' }, message: content })
  }

  receiveMessage(data: any) {
    this.messages.push({
      metadata: { timestamp: new Date() },
      content: data
    });
  }

  join(channelIndex: number) {
    this.switchChannel(channelIndex);
    //this.sendMessage("joined the chat!");
  }

  switchChannel(channelIndex: number) {
    this.activeChannel = this.channels[channelIndex];
  }

  sendMessage(content: string) {
    if (this.activeChannel != null) {
      const msg = { sender: this.user, message: content };
      this.activeChannel.trigger("client-message", msg);
      this.receiveMessage(msg);
    }
    else {
      console.exception("please select a channel");
    }
  }


}