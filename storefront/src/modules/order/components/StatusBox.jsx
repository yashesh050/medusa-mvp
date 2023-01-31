import React from "react"
import { useState } from "react"
import ModalFitKit from "../components/ModalFitkit"
//import Modalfitkit from "../components/ModalFitkit"
//import { useDispatch, useSelector } from 'react-redux';
//import Modal from "./Modal"

//import statusCheck from "../Icons/status-check.png"
//import dropDown from "../Icons/dropDown.png"
//import processing from "../Icons/processing.png"
//import actionrequired from "../Icons/actionrequired.png"
//import notReadyToShip from "../Icons/notReadyToShip.png"
//import dactive from "../Icons/dactive.png"
//import CaretDown from "../Icons/CaretDown.png"
//import Dropdown from './Dropdown';
import Image from "next/image"
const StatusBox = ({
  title,
  OrderDetailTitle,
  OrderDetailValue,
  status,
  Active,
  orderTotal,
  totalValue,
  button,
}) => {
  const getOrderValue = () => {
    if (status === "processing") {
      return "#"
    } else {
      return null
    }
  }

  const getStatusImg = () => {
    if (status === "processing") {
      return (
        <Image
          src="/processing.png"
          width="128px"
          height="33px"
          //layout="fill"
          objectFit="cover"
          //className=" absolute left-5"
        />
      )

      //<img className="" src={processing} alt="title"

      // />
    } else if (status === "actionreq") {
      return (
        <Image
          src="/actionrequired.png"
          width="166px"
          height="33px"
          //layout="fill"
          objectFit="cover"
          //className=" absolute left-5"
        />
      )
    } else if (status === "notready") {
      return (
        <Image
          src="/notReadyToShip.png"
          width="175px"
          height="33px"
          //layout="fill"
          objectFit="cover"
          //className=" absolute left-5"
        />
      )
      // />
    }
  }
  const bgColor = () => {
    if (status === "processing") {
      return "bg-[#EDFAF2]"
    } else if (status === "actionreq") {
      return "bg-[#eab308]/[0.08]"
    } else if (status === "notready") {
      return "bg-[#2c2f32]/[0.04]"
    }
  }
  const active = () => {
    if (Active === "active") {
      return (
        <Image
          src="/status-check.png"
          width="24px"
          height="24px"
          //layout="fill"
          objectFit="cover"
          //className=" absolute left-5"
        />
      )
      //<img className="" src={statusCheck} alt="title" />
    } else if (Active === "dactive") {
      return (
        <Image
          src="/dactive.png"
          width="24px"
          height="24px"
          //layout="fill"
          objectFit="cover"
          //className=" absolute left-5"
        />
      )
    }
  }
  const [modalVisibleFitkit, setModalVisibleFitkit] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const buttons = () => {
    if (button === "yes") {
      return (
        <div className="">
          <button
            className="bg-[#1437BF] rounded-full "
            onClick={() => {
              setModalVisibleFitkit(true)
            }}
          >
            <div className="px-10 py-5 text-lg font-medium text-[#ffff]">
              Complete FitKit
            </div>
          </button>
        </div>
      )
    } else if (button === "no") {
      return null
    }
  }

  return (
    <div>
      <div
        className={`statusbox flex mx-20 mt-8 ${bgColor()} px-8 py-8 rounded-2xl`}
      >
        <div className="icn basis-1/12 self-center ">
          {active()}
          {/* <img className="" src={statusCheck} alt="title" /> */}
        </div>
        <div className="st-t text-2xl font-medium basis-6/12 self-center ">
          {title}
        </div>
        <div className="ord-no basis-4/12 pr-20">
          <div className="ord-no-t text-lg font-normal text-[#2c2f32]/[0.6]">
            {OrderDetailTitle}
          </div>
          <div className="ord-no-v text-[#2C2F32] text-base font-medium pt-4">
            {getOrderValue()}
            {OrderDetailValue}
          </div>
        </div>
        <div className="ord-status basis-3/12 ">
          <div className="ord-status-t text-lg font-normal  text-[#2c2f32]/[0.6]">
            status
          </div>
          <div className="ord-status-v text-[#2C2F32] pt-4">
            {getStatusImg()}
          </div>
        </div>
        <div className="ord-total basis-3/12 self-center">
          {buttons()}
          <div className="ord-total-t text-lg font-normal  text-[#2c2f32]/[0.6]">
            {orderTotal}
          </div>
          <div className="ord-total-v text-[#2C2F32] text-xl font-medium pt-4">
            {totalValue}
          </div>
        </div>
        <div className="icn  self-center ">
          <div className="">
            <Image
              src="/CaretDown.png"
              width="24px"
              height="24px"
              //layout="fill"
              objectFit="cover"
              //className=" absolute left-5"
            />
            {/* <img className="" src={CaretDown} alt="title" /> */}
          </div>

          {/* start dropDown */}

          {/* end dropdown */}
        </div>
      </div>

      {/* start modal */}
      <ModalFitKit
        width="w-[900px]"
        hasCloseIcon={true}
        isClosableOverlay={false}
        isOpened={modalVisibleFitkit}
        closeModalFunc={() => {
          setModalVisibleFitkit(false)
        }}
      >
        <>
          <div className="rep-prep text-center ">
            <div className="text-6xl font-medium text-[#fff] capitalize">
              Hold on, before you go...
            </div>
            <div className="text-[#fff]/[0.6] text-2xl font-normal pt-8 pb-12">
              Don’t forget to complete your Feno FitKit assessment to complete
              and receive your Feno order.
            </div>
            <div className="e-btn">
              <div className="buttonFitkit">
                <button
                  className="bg-[#1437BF] rounded-full "
                  onClick={() => {
                    setModalVisibleFitkit(false)
                  }}
                >
                  <div className="px-12 py-5 text-lg font-medium text-[#ffff]">
                    Complete FitKit
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      </ModalFitKit>
      {/* end modal */}
    </div>
  )
}

export default StatusBox
