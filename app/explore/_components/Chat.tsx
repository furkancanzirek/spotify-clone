"use client";
import ChatActions from "./ChatActions"
import ChatMessages from "./ChatMessages"
import ChatProvider from "@/contexts/ChatContext";



const Chat = ({

}) => {
  return (
    <ChatProvider >
      <div className="
        h-full 
        flex flex-col justify-between 
        gap-3
    ">
        <ChatMessages />
        <ChatActions />
      </div>
    </ChatProvider >
  )
}

export default Chat