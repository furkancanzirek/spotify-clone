"use client"
import Input from '@/components/Input'
import React, {useState} from 'react'
import { useChatContext } from '@/hooks/useChatContext'
import { useUser } from '@/hooks/useUser'

const ChatActions =() => {
    const { addMessage ,writeNextMessage} = useChatContext()
    const { user } = useUser()
    const [message, setMessage] = useState('')
    const onChangeMessage=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setMessage(e.target.value)
    }
    
    const keyPressEvent= async (
        e:React.KeyboardEvent<HTMLInputElement>
    )=>{
        if(e.key === 'Enter'){
            addMessage({
                content: message,
                user: {
                    name: user?.email,
                }
            })
        
            setMessage('')
        }
    }
    return (

        <div>
            <Input value={message} onKeyDown={keyPressEvent} onChange={onChangeMessage} className='text-neutral-300' message />
        </div>
    )
}

export default ChatActions