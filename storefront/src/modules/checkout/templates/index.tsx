import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import Nav from "@modules/layout/templates/nav"
import FooterNav from "@modules/layout/components/footer-nav"
import CartTemplate from "@modules/cart/templates"
import { useCart, useMeCustomer } from "medusa-react"
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page"
import EmptyCartMessage from "@modules/cart/components/empty-cart-message"

const CheckoutTemplate = () => {
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  // if (!cart || !cart?.id?.length || isLoading) {
  //   return <SkeletonCartPage />
  // }

  return (
    <CheckoutProvider>
      <div className=" relative small:min-h-screen">
        <Nav />
        {/* <div className="h-16 bg-white">
          <nav className="flex items-center h-full justify-between content-container">
            <Link href="/cart">
              <a className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0">
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden small:block">
                  Back to shopping cart
                </span>
                <span className="mt-px block small:hidden">Back</span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-xl-semi">ACME</a>
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div> */}
        <div className="relative">
          <CheckoutLoader />

          {/* <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 py-12">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
           */}
          {cart?.items.length ? (<div className="fenoBody flex px-20">

            <div className="checkout-body basis-6/12 ">
              <CartTemplate />


            </div>
            <div className="sidebar  basis-6/12">
              <div className="ml-40">
                <CheckoutForm />
                <CheckoutSummary />
              </div>

            </div>
          </div>) : (<div className="123"><EmptyCartMessage /></div>)}
          {/* <div className="fenoBody flex px-20">

            <div className="checkout-body basis-6/12 ">
              <CartTemplate />

              
            </div>
            <div className="sidebar  basis-6/12">
              <div className="ml-40">
                <CheckoutForm />
                <CheckoutSummary />
              </div>

            </div>
          </div> */}

        </div>
        <div className=" w-full flex items-center justify-center">
          {/* <MedusaCTA /> */}
          <FooterNav />
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
