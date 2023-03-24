import React, { createContext, useState } from 'react';
import { Message, Command } from '@/types';
import useCommands from '@/hooks/useCommandTexts';
import useMessageHandler from '@/hooks/useChat';
export const ChatContext = createContext<ChatContextType | undefined>(undefined);


type ChatContextType = {
    messages: any[];
    addMessage: (message:object) => void;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    activeCommand: Command;
    setActiveCommand: React.Dispatch<React.SetStateAction<Command>>,
    writeNextMessage: () => string;
    setActiveCommandMessageCount: React.Dispatch<React.SetStateAction<number>>;
    activeCommandMessageCount: number;
    clearMessages: () => void;
    changeCommand: (command:Command) => void;
}

type ChatProviderProps = {
    children: React.ReactNode;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const {activeCommand,setActiveCommand ,writeNextMessage,setActiveCommandMessageCount,activeCommandMessageCount,changeCommand} = useCommands();
    const { addMessage, messages, setMessages} = useMessageHandler();


    const value: ChatContextType = {
        messages,
        setMessages,
        addMessage,
        activeCommand,
        setActiveCommand,
        writeNextMessage,
        setActiveCommandMessageCount,
        activeCommandMessageCount,
        changeCommand,
    };

    return <ChatContext.Provider value={value} children={children} />;
};

export default ChatProvider;