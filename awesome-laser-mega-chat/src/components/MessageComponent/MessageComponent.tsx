import React, { FunctionComponent } from 'react';
import { observer } from "mobx-react";
import './MessageComponents.css';

const MessageComponent: FunctionComponent<{ message: any }> = props => {

    return <div className='MessageBubble'>
        <div className='MessageBubble__profilePicture'>
            {props.message.content.sender.emoji}</div>
        {props.message.content.message}
        <label className="MessageBubble__timestamp">
            {new Intl.DateTimeFormat("de-DE", {
                hour: "numeric",
                minute: "numeric",
            }).format(props.message.metadata.timestamp)}
        </label>
    </div>;

};

export default observer(MessageComponent);