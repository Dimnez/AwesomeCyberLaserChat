import React, { useState, useEffect, FunctionComponent} from "react";
import CommunicationFeedProviderService from '../../models/CommunicationFeedProviderService';
import {observer} from "mobx-react";
import MessageComponent from '../../components/MessageComponent/MessageComponent';
import './MessagingView.css';
import { ViewArrayOutlined } from "@material-ui/icons";

const MessagingView: FunctionComponent<{}> = props => {
  
   const feed = CommunicationFeedProviderService.getCommunicationFeed();

   let messagesEndRef = React.createRef<HTMLDivElement>();

   const scrollToBottom = () => {
     if(messagesEndRef != null && messagesEndRef.current != null)
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    //Scroll to the bottom to move new messages into the users view
    useEffect(() => {
        scrollToBottom();
    });

    return <div className='MessagingView'>
        {feed.messages.map((item:any)=> 
        (<MessageComponent message={item}></MessageComponent> ))}
        <div ref={messagesEndRef} />
    </div>
  };

export default observer(MessagingView);