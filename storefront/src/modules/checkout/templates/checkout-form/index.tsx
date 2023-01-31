import { useCheckout } from "@lib/context/checkout-context"
import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Shipping from "@modules/checkout/components/shipping"
import { useCart } from "medusa-react"
import Image from "next/image"
import PaymentDesign from "@modules/common/components/paymentDesign"

const CheckoutForm = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  //const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div>


      {/* end pay with card */}

      <div className="w-full grid grid-cols-1 ">
        <div>
          <Addresses />
        </div>

        <div>
          {/* <Shipping cart={cart} /> */}
        </div>
        <div>
          {!isEdit ? (
            <PaymentDesign />
          ) : (
            null
          )}
        </div>
        <div>

          {!isEdit ? (
            <Payment />
          ) : (
            null
          )}
          {/* <Payment /> */}
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
