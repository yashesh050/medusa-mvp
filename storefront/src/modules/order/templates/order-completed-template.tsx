import { Order } from "@medusajs/medusa"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import ShippingDetails from "@modules/order/components/shipping-details"
//import StatusBox from "@modules/order/components/StatusBox";
import StatusBox from "../components/StatusBox"
import React from "react"
import { formatAmount } from "medusa-react"
//import StatusBox from "@modules/order/components/StatusBox"
type OrderCompletedTemplateProps = {
  order: Order
  button: any
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,

}) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return
    }

    return formatAmount({ amount, region: order.region, includeTaxes: false })
  }
  return (
    <>
      <div>
        <StatusBox
          title={'Order Placed'}
          OrderDetailTitle={'Order Number'}
          OrderDetailValue={order.display_id}
          //OrderDetailValue={'#88875442'}
          status={'processing'}
          Active={'active'}
          orderTotal={'Order Total'}
          totalValue={getAmount(order.total)}
          //totalValue={'$240.99'}
          button={undefined} />

        <StatusBox
          title={'Complete Feno FitKit Assessment'}
          OrderDetailTitle={'Details'}
          OrderDetailValue={'Please be aware, your Feno brush will not be shipped until you complete the Feno FitKit assessment. '}
          status={'actionreq'}
          Active={'dactive'}
          button={'yes'} orderTotal={undefined} totalValue={undefined} />
        <StatusBox
          title={'Order complete & ready to ship'}
          OrderDetailTitle={'Details'}
          OrderDetailValue={'You will receive an ‘Order Complete’ confirmation once your order is ready to ship.'}
          status={'notready'}
          Active={'dactive'} orderTotal={undefined} totalValue={undefined} button={undefined} />
        <div className="py-20"></div>
        {/* <ShippingFooter /> */}
      </div>

      {/* <div className="bg-gray-50 py-6 min-h-[calc(100vh-64px)]">
        <div className="content-container flex justify-center">
          <div className="max-w-4xl h-full bg-white w-full">
            <OrderDetails order={order} />
            <Items
              items={order.items}
              region={order.region}
              cartId={order.cart_id}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 border-b border-gray-200">
              <ShippingDetails
                shippingMethods={order.shipping_methods}
                address={order.shipping_address}
              />
              <OrderSummary order={order} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
              <Help />
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default OrderCompletedTemplate
