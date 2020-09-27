import React, {FunctionComponent} from "react";
import CommunicationFeedProviderService from '../../models/CommunicationFeedProviderService';
import {observer} from "mobx-react";
import './EmojiSelection.css'


const EmojiSelection: FunctionComponent<{}> = props => {

  const emojiCollection : string[] = "🦘 🐆 🐋 🦔 🐉 👽 👾 🤖 🎃 🐯 🐮 😺 🐷 🧔 👨‍🦳 ⛹️‍♀️".split(' ');

  const feed = CommunicationFeedProviderService.getCommunicationFeed();

  const selection = (item:string)=>{
    feed.user = {emoji: item};
    feed.localBotMessage(`Thanks! Nice to meet you ${item}`);
    feed.sendMessage(`@Everyone say hi to ${item}`)
  };

  return <div className ="EmojiSelection">
 
    {
      emojiCollection.map((item:string)=> 
     (<a onClick={()=>{selection(item)}} className ="EmojiSelection__item">{item}</a>)
      )
    }
  </div>
};

export default observer(EmojiSelection);