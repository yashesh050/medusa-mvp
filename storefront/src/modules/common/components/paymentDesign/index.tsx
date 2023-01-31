import React from "react"
import Image from "next/image"


const PaymentDesign = () => {
  return (

    <div>
      <div className="text-xl font-semibold pb-6 text-[#2C2F32]">
        Express Checkout
      </div>
      <div className="payment flex mb-16">
        <div className="pr-3">
          <Image
            src="/paypal.png"
            width="180px"
            height="57px"
            // layout="fill"
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
          />
        </div>
        <div className="pr-3">
          <Image
            src="/macpay.png"
            width="142px"
            height="60px"
            // layout="fill"
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
          />
        </div>
        <div className="pr-3">
          <Image
            src="/affirmpay.png"
            width="140px"
            height="56px"
            // layout="fill"
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
          />
        </div>
        <div className="pr-3">
          <Image
            src="/gpay.png"
            width="138px"
            height="60px"
            // layout="fill"
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0"
            draggable="false"
          />
        </div>
      </div>
      {/* start pay with card */}
      <div className="payCard">
        <div className="pct font-semibold text-xl pb-4 text-[#2C2F32]">
          Or Pay With a Card
        </div>
        <div className="pcrule text-[#2C2F32]/[.32] text-base font-normal mb-8">
          *Please make sure your billing address matches the one your banks has
          on file.
        </div>
        <div className="cards flex mb-6">
          <div className="pr-6">
            <Image
              src="/mastercard.png"
              width="50px"
              height="32px"
              // layout="fill"
              loading="eager"
              priority={true}
              quality={90}
              objectFit="cover"
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="absolute inset-0 "
              draggable="false"
            />
            {/* <img className="pr-6" src={mastercard} alt="title" /> */}
          </div>
          <div className="pr-6">
            <Image
              src="/visa.png"
              width="50px"
              height="32px"
              // layout="fill"
              loading="eager"
              priority={true}
              quality={90}
              objectFit="cover"
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="absolute inset-0 "
              draggable="false"
            />
          </div>
          <div className="">
            <Image
              src="/american-express.png"
              width="50px"
              height="32px"
              // layout="fill"
              loading="eager"
              priority={true}
              quality={90}
              objectFit="cover"
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="absolute inset-0 "
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDesign
