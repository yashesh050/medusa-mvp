import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    // <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
    //   <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
    //     <div>
    //       <Link href="/">
    //         <a className="text-xl-semi uppercase">Acme</a>
    //       </Link>
    //     </div>
    //     <div className="text-small-regular grid grid-cols-2 gap-x-16">
    //       <div className="flex flex-col gap-y-2">
    //         <span className="text-base-semi">Collections</span>
    //         <ul
    //           className={clsx("grid grid-cols-1 gap-y-2", {
    //             "grid-cols-2": (collections?.length || 0) > 4,
    //           })}
    //         >
    //           {collections?.map((c) => (
    //             <li key={c.id}>
    //               <Link href={`/collections/${c.id}`}>
    //                 <a>{c.title}</a>
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="flex flex-col gap-y-2">
    //         <span className="text-base-semi">Medusa</span>
    //         <ul className="grid grid-cols-1 gap-y-2">
    //           <li>
    //             <a
    //               href="https://github.com/medusajs"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               GitHub
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="https://docs.medusajs.com"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Documentation
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="https://github.com/medusajs/nextjs-starter-medusa"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Source code
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
    //     <span className="text-xsmall-regular text-gray-500">
    //       © Copyright 2022 ACME
    //     </span>
    //     <div className="min-w-[316px] flex xsmall:justify-end">
    //       <CountrySelect />
    //     </div>
    //   </div>
    // </div>
    <div className="footer bg-[#2C2F32] px-20 py-32 ">
      <div className="grid grid-cols-6 gap-4">
        <div className="stay col-span-2">
          <div className="text-[#fff] text-5xl font-medium pr-60">
            Stay Connected
          </div>
          <div className="my-10 pb-4 text-[#ffffff]/[0.3] border border-t-0 border-l-0 border-r-0  border-[#ffffff]/[0.3] mr-56">
            <div className="   placeholder-[#ffffff]/[0.3]  ">
              <div className="relative w-full ">
                <div className="inputs  flex justify-between">
                  <input
                    className="w-full outline-0  bg-[#2C2F32] text-xl "
                    type="text"
                    name="card_number"
                    placeholder="Drop us your email to stay in the loop."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <span className="bg-[#1437BF] text-[#fff] rounded-full px-10 py-4 text-base font-medium">
              Subscribe Now
            </span>
          </div>
        </div>

        <div className="Explore">
          <div className="ExploreTitle text-[#fff]/[0.4] pb-8 text-xl pl-32">
            Explore
          </div>
          <ul className="text-[#fff]/[0.8] text-base  font-normal pl-32">
            <li className="pb-4">Feno Brush</li>
            <li className="pb-4">Features & Benefits</li>
            <li className="pb-4">Feno App</li>
          </ul>
        </div>
        <div className="About">
          <div className="ExploreTitle text-[#fff]/[0.4] pb-8  text-xl pl-44">
            About
          </div>
          <ul className="text-[#fff]/[0.8] text-base font-normal pl-44">
            <li className="pb-4">Our Story</li>
            <li className="pb-4">Reviews</li>
            <li className="pb-4">Press</li>
            <li className="pb-4">Stories</li>
          </ul>
        </div>
        <div className="Connect">
          <div className="ExploreTitle text-[#fff]/[0.4] pb-8  text-xl pl-44">
            Connect
          </div>
          <ul className="text-[#fff]/[0.8] text-base font-normal pl-44">
            <li className="pb-4">Contact Us</li>
            <li className="pb-4">Live Chat</li>
            <li className="pb-4">Social</li>
          </ul>
        </div>
        <div className="Help pl-44">
          <div className="ExploreTitle text-[#fff]/[0.4] pb-8 text-xl">
            Help
          </div>
          <ul className="text-[#fff]/[0.8] text-base font-normal">
            <li className="pb-4">Tech Support</li>
            <li className="pb-4">Delivery</li>
            <li className="pb-4">Returns</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
