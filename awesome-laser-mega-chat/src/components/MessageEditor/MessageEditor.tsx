import React, { FunctionComponent,useState  } from 'react';
import { TextField , Button } from '@material-ui/core';
import CommunicationFeedProviderService from '../../models/CommunicationFeedProviderService';
import './MessageEditor.css';
import SendIcon from '@material-ui/icons/Send';
import {observer} from "mobx-react";
import EmojiSelection from '../../components/EmojiSelection/EmojiSelection';

const MessageEditor: FunctionComponent<{}> = props => {

let [message_value,setMessage_value] =useState("");

  const feed = CommunicationFeedProviderService.getCommunicationFeed();

  const sendMessage = ()=>{

    if(message_value.trim() != "")
    {
      feed.sendMessage(message_value);
      setMessage_value("");
    }
    else
    { 
      //todo: alert for messages which are not valid
    }

  };

    return <div className='MessageEditor'>

      {feed.user == null ? <EmojiSelection></EmojiSelection> :
      <div className ='MessageEditor__inner'>
     <TextField
          label="Your Message"
          multiline
          rows={4}
          value={message_value} 
          id ="message_field"
          placeholder="Type here.."
          fullWidth={true}
          onChange={(event)=>{setMessage_value(event.target.value);}}
          variant="outlined"
        />
        <Button color="primary" onClick={sendMessage}> <SendIcon></SendIcon></Button>
        </div>
   } </div>
};

export default observer(MessageEditor);