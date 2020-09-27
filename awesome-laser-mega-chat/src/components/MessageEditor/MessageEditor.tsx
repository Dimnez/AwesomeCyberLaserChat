import React, { FunctionComponent,useState  } from 'react';
import { TextField , Button } from '@material-ui/core';
import CommunicationFeedProviderService from '../../models/CommunicationFeedProviderService';
import './MessageEditor.css';


const MessageEditor: FunctionComponent<{}> = props => {

let [message_value,setMessage_value] =useState("");

  const feed = CommunicationFeedProviderService.getCommunicationFeed();

  const sendMessage = ()=>{

    if(message_value.trim() != "")
    {
      feed.sendMessage(message_value);
    }
    else
    { 
      feed.printDialogue(["Whoops..","I'm sorry, but this not a valid message :-/"],30);
    
    }


  };

    return <div className='MessageEditor'>

      {feed.user == null ? "" :
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
        <Button color="primary" onClick={sendMessage}>Send</Button>
        </div>
   } </div>
};

export default MessageEditor;