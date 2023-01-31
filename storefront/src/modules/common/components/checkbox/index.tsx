import React from "react"
import Image from "next/image"
type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  return (
    <button
      className="text-base-regular flex items-center gap-x-2 "
      role="checkbox"
      type="button"
      aria-checked={checked}
      onClick={onChange}
    >
      <div
        role="checkbox"
        aria-checked={checked}
        className="border border-[#2c2f32] rounded-lg  w-6 h-6 flex items-center justify-center  overflow-hidden"
      >
        {checked ? <Image
          src="/Check.png"
          width="24px"
          height="24px"
          //layout="responsive"
          //loading="eager"
          //priority={true}
          //quality={90}
          objectFit="none"
          //alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
          className="absolute inset-0 bg-[#2c2f32] "
        //="false"
        /> : null}
      </div>
      <span className="font-normal text-base">{label}</span>
    </button>
  )
}

export default Checkbox
// "✓"