"use client"
import ChatAvatar from './ChatAvatar'
import { twMerge } from 'tailwind-merge'
interface ChatMessageProps {
    message: any,
    sameUser?: Boolean
}

const ChatMessage: React.FC<ChatMessageProps> = (
    {
        message,
        sameUser
    }
) => {

    return (
        <div>
            <div className={twMerge(
                `
            flex
            mb-3
            p-4
            ${message.user.authorRole === 'bot' ? 'bg-[#78f0a0]' : ''}
            `
            )}>

                <ChatAvatar avatarUrl={message.user.avatarUrl} />
                <div className='
            ml-2
            '>
                    <p className={twMerge(
                        `
                        ${message.user.authorRole === 'bot' ? 'text-black' : 'text-white'}
                    font-semibold
                    `
                    )}>
                        {message.user.name}
                    </p>

                    <p className={twMerge(
                        `
                        ${message.user.authorRole === 'bot' ? 'text-black' : 'text-neutral-300'}
                        `
                    )}>
                        {message.content}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ChatMessage