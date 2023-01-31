import { ErrorMessage } from "@hookform/error-message"
import ChevronDown from "@modules/common/icons/chevron-down"
import clsx from "clsx"
import {
  forwardRef,
  SelectHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { get } from "react-hook-form"
import Image from "next/image"

export type CountrySelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & SelectHTMLAttributes<HTMLSelectElement>

const CountrySelect = forwardRef<HTMLSelectElement, CountrySelectProps>(
  (
    {
      placeholder = "Select...",
      errors,
      touched,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    const [isPlaceholder, setIsPlaceholder] = useState(false)

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    const hasError = props.name
      ? get(errors, props.name) && get(touched, props.name)
      : false

    useEffect(() => {
      if (innerRef.current && innerRef.current.value === "") {
        setIsPlaceholder(true)
      } else {
        setIsPlaceholder(false)
      }
    }, [innerRef.current?.value])

    return (
      <div className=" ">
        <div
          onFocus={() => innerRef.current?.focus()}
          onBlur={() => innerRef.current?.blur()}
          className={clsx(
            "relative flex items-center text-base-regular  border-2  rounded-lg mt-2",
            className,
            {
              "text-gray-500": isPlaceholder,
            }
          )}
        >
          <Image
            src="/usa.png"
            width="24px"
            height="18px"
            layout="fill"
            objectFit="none"
            className=" absolute left-5"
          />
          <span className="absolute  pr-1 rounded-lg right-4">
            {/* X */}
            <ChevronDown />
          </span>
          <select
            ref={innerRef}
            {...props}
            className="appearance-none flex-1 bg-transparent border-none opacity-0 z-40 transition-colors duration-150 focus:border-gray-700 outline-none pl-1 p-3 pb-5 "
          >
            <option value="">{placeholder}</option>
            {children}
          </select>

          {/* <span className="absolute  bg-[#2c2f32]/[.08] pl-2">
            X */}
          {/* <ChevronDown /> */}
          {/* </span> */}
        </div>

        {hasError && props.name && (
          <ErrorMessage
            errors={errors}
            name={props.name}
            render={({ message }) => {
              return (
                <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                  <span>{message}</span>
                </div>
              )
            }}
          />
        )}
      </div>
    )
  }
)

CountrySelect.displayName = "CountrySelect"

export default CountrySelect

// position: absolute;
//     padding: 16px;
//     margin-top: 11px;
//     border: 1px solid gray;
