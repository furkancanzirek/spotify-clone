"use client";
interface ChatAvatarProps {
    avatarUrl: string;
}

const ChatAvatar: React.FC<ChatAvatarProps> = ({ avatarUrl }) => {
    return (
        <div className="relative h-fit">
            <img
                className="w-8 h-8 rounded-full"
                src={avatarUrl}
                alt="avatar"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white"></div>
        </div>
    );
};

export default ChatAvatar;