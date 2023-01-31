import { Fragment } from "react"

import { Dialog, Transition } from "@headlessui/react"
//import closeIcon from "../Icons/close.png"
import Image from "next/image"
function ModalFitkit({
  hasCloseIcon,
  closeModalFunc,
  isOpened,
  isClosableOverlay,
  width,
  children,
}) {
  //const { t } = useTranslation();
  return (
    <Transition show={isOpened} as={Fragment}>
      <Dialog
        onClose={isClosableOverlay ? closeModalFunc : () => {}}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-[#F8F7F7]/[0.8] bg-opacity-60 backdrop-blur-[2px]"
            aria-hidden="true"
          />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={`${width} max-w-[90vw] bg-[#2C2F32] relative z-50  p-5 sm:p-8 rounded-lg sm:py-28 sm:px-56`}
            >
              {hasCloseIcon ? (
                <button
                  aria-label={"MODAL.CLOSE_ARIA_LABEL"}
                  onClick={closeModalFunc}
                  className="absolute top-3 right-3 z-10 active:scale-90 p-3"
                >
                  <Image
                    src="/close.png"
                    width="40px"
                    height="40px"
                    //layout="fill"
                    objectFit="cover"
                    //className=" absolute left-5"
                  />
                  {/* <img
                    width={22}
                    height={22}
                    src={closeIcon}
                    alt="Close icon"
                  /> */}
                </button>
              ) : null}
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalFitkit
