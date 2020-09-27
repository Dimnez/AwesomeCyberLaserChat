import React, { FunctionComponent } from 'react';
import { TextField , Button } from '@material-ui/core';
import CommunicationFeedProviderService from '../../models/CommunicationFeedProviderService';

const MessageEditor: FunctionComponent<{}> = props => {

    const sendMessage = () => {
      const pusherFeed= CommunicationFeedProviderService.getCommunicationFeed();
     // pusherFeed.trigger();
    };

    return <div style = {{display : 'flex', width : '100%'}}>
     <TextField
          label="Your Message"
          multiline
          rows={4}
          placeholder="Type here.."
          fullWidth={true}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>Send</Button>
    </div>
};

export default MessageEditor;