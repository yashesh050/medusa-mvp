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

export type NativeSelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & SelectHTMLAttributes<HTMLSelectElement>

const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
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

      <div className="pl-1 ">
        <div
          onFocus={() => innerRef.current?.focus()}
          onBlur={() => innerRef.current?.blur()}
          className={clsx(
            "relative flex items-center text-base-regular ",
            className,
            {
              "text-gray-500": isPlaceholder,
            }
          )}
        >
          <span className="absolute  bg-[#2c2f32]/[.08] pl-3 pr-1 rounded-lg">
            {/* X */}
            {/* <ChevronDown /> */}
          </span>
          <select

            ref={innerRef}
            {...props}
            className="appearance-none flex-1  border-none  transition-colors duration-150 focus:border-gray-700 outline-none pl-1 bg-[#2c2f32]/[.08] absolute w-7 rounded-lg"
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

NativeSelect.displayName = "NativeSelect"

export default NativeSelect
