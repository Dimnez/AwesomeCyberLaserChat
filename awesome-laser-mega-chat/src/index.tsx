import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CommunicationFeedProviderService from './models/CommunicationFeedProviderService';
import Pusher from 'pusher-js';

async function subscribeToPusher()
{
  Pusher.logToConsole = true;

  const pusher = await new Pusher('11b4ad3a39f15ba40603',  {
    cluster: 'eu'
  });

  const channel = await pusher.subscribe('public-channel');
  const feed = CommunicationFeedProviderService.getCommunicationFeed();

  await channel.bind('pusher:subscription_succeeded', function() {
     channel.trigger('client-message', {"message": "hello world"});
  });

  await channel.bind('client-message', function(data:any) {
    alert(JSON.stringify(data));
  });

}

subscribeToPusher();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
