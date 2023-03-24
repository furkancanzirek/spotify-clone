import { useContext } from "react";
import { ChatContext } from "@/contexts/ChatContext"

export const useChatContext = () => {
  const context = useContext(ChatContext);
  
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
