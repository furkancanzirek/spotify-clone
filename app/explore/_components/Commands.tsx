"use-client"
import { useEffect } from "react"
import { useChatContext } from "@/hooks/useChatContext"
import { Command } from "@/types"
import { commands } from "@/utils/commandsTexts.json"


const Commands = () => {

    const { activeCommand, setActiveCommand, addMessage, writeNextMessage, setActiveCommandMessageCount, clearMessages, changeCommand } = useChatContext()

    const onClickCommand = (command: Command) => {
        changeCommand(command)
    }

    return (
        <div className="
        grid
        grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-4
        w-full
        p-4
        auto-rows-fr	
        ">
            {commands.map((command, index) => (
                <div
                    onClick={() => onClickCommand(command)}
                    key={index} className={`
                "
                flex flex-col items-center text-center 
                justify-center
                gap-2 
                bg-[#1DB954] 
                rounded-md 
                p-1 
                cursor-pointer
                ${activeCommand.key === command.key ? 'bg-opacity-100' : 'bg-opacity-50'}
                `}>
                    <div className="text-md font-bold">
                        {command.name}</div>
                    <div className="text-sm text-center ">
                        <span className="font-bold">Example: </span>
                        {command.example}</div>
                </div>
            ))}
        </div>
    )
}

export default Commands