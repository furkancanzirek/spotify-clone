"use client"
import React from 'react'
import ChatMessage from './ChatMessage'
import Commands from './Commands'
import { useChatContext } from '@/hooks/useChatContext'
interface ChatMessagesProps {
    
}
const ChatMessages: React.FC<ChatMessagesProps> = (
    {
         
    }
) => {

    const { messages } = useChatContext()
    
    const sameUser = (message: any, previousMessage: any) => {
        if (previousMessage === undefined) {
            return false
        }
        return message.user.name === previousMessage.user.name
    }
    return (
        <div className='
    h-full
    max-h-[100%]
    overflow-y-auto
    w-full 
    rounded-md 
   bg-neutral-700
    border
    border-transparent
    text-sm 
    whitespace-pre-line
    '>
            <Commands />
            {messages.map((message: any, index: any) => (
                <ChatMessage sameUser={sameUser(message, messages[index - 1])} key={message.id} message={message} />
            ))}
        </div>
    )
}

export default ChatMessages