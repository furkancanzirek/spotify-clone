import { forwardRef } from "react";
import { IoMdSend } from "react-icons/io";
import { twMerge } from "tailwind-merge"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { 
  message?: boolean
  }

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  message=false,
  ...props
}, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={twMerge(
          `
        flex 
        w-full 
        rounded-md 
        bg-neutral-700
        border
        border-transparent
        px-3 
        py-3 
        text-sm 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        focus:outline-none
      `,
          disabled && 'opacity-75',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
      {message && (<IoMdSend className="absolute right-3 top-[50%] translate-y-[-50%] text-xl cursor-pointer" />)}
      
    </div>
  )
});

Input.displayName = "Input";

export default Input