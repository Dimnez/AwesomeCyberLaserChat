import React from 'react';
import AppLayoutView from './views/AppLayoutView/AppLayoutView';
import MessagingView from './views/MessagingView/MessagingView';
import MessageEditor from './components/MessageEditor/MessageEditor';
import './App.css';


function App() {

  return (
   <AppLayoutView>
     <MessagingView></MessagingView>
     <MessageEditor></MessageEditor>
   </AppLayoutView>
  );
}

export default App;
