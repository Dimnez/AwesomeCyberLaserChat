import React from 'react';
import './App.css';
import AppLayoutView from './views/AppLayoutView/AppLayoutView';
import MessagingView from './views/MessagingView/MessagingView';
import MessageEditor from './components/MessageEditor/MessageEditor';

function App() {

  return (
   <AppLayoutView>
     <MessagingView></MessagingView>
     <MessageEditor></MessageEditor>
   </AppLayoutView>
  );
}

export default App;
