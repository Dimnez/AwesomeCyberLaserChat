import React, { useState, useEffect, FunctionComponent} from "react";
import CommunicationFeedProviderService from '../../models/CommunicationFeedProviderService';
import {observer} from "mobx-react";

const MessagingView: FunctionComponent<{}> = props => {
   
   
   const feed = CommunicationFeedProviderService.getCommunicationFeed();

  return <div style={{height:'100%'}}>
      {feed.messages.map((item:string)=>(  <p>{item}</p>)
      )}
  </div>
};

export default observer(MessagingView);