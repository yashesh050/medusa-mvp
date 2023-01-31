import { useCheckout } from "@lib/context/checkout-context"
import DiscountCode from "@modules/checkout/components/discount-code"
import GiftCard from "@modules/checkout/components/gift-card"
import PaymentButton from "@modules/checkout/components/payment-button"
import Button from "@modules/common/components/button"
import CartTotals from "@modules/common/components/cart-totals"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  // const { cart } = useCart()
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8">
      <div className="w-full bg-white flex flex-col ">
        <CartTotals cart={cart} />

        {!isEdit ? (
          <PaymentButton paymentSession={cart?.payment_session} />
        ) : (
          <Button
            className=""
            onClick={handleSubmit(setAddresses)}
          >
            Continue
          </Button>
        )}

      </div>
      <div className="p-6 bg-white">
        {/* <DiscountCode cart={cart} /> */}
      </div>
      {/* <GiftCard cart={cart} /> */}
    </div>
  )
}

export default CheckoutSummary
