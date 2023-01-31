import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full  flex items-center justify-center  px-6 py-[16px] text-lg border transition-colors duration-200 disabled:opacity-50 font-medium",
        {
          "text-white bg-[#1437BF] border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900  rounded-full disabled:hover:text-white":
            variant === "primary",
          "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
            variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
