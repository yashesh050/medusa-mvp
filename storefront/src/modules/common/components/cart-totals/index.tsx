import { Cart } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import React from "react"

type CartTotalsProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = cart

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  return (
    <div>
      <div className="text-small-regular text-gray-700">
        <div className="flex items-center justify-between text-base-regular text-[#2C2F32] mb-2 py-4 px-6 ">
          <span className="text-xl font-medium">Subtotal</span>
          <span className="font-medium text-2xl">{getAmount(subtotal)}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          {!!discount_total && (
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>- {getAmount(discount_total)}</span>
            </div>
          )}
          {!!gift_card_total && (
            <div className="flex items-center justify-between ">
              <span>Gift card</span>
              <span>- {getAmount(gift_card_total)}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-[#2C2F32] py-4 px-6 mb-2">
            <span className="text-xl font-medium">Shipping</span>
            <span className="font-medium text-2xl">{getAmount(shipping_total)}</span>
          </div>
          {/* <div className="flex items-center justify-between">
            <span>Taxes</span>
            <span>{getAmount(tax_total)}</span>
          </div> */}
        </div>
        {/* <div className="h-px w-full border-b border-gray-200 border-dashed my-4" /> */}
        <div className="flex items-center justify-between text-base-regular text-[#2C2F32] py-4 px-6 mb-4 bg-[#2c2f32]/[0.08]  rounded-full ">
          <span className="text-xl font-medium">Total</span>
          <span className="font-medium text-2xl">{getAmount(total)}</span>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
