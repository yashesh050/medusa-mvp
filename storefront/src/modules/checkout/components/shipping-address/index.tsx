import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-dropdown"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            {/* <Input
              label="Email"
              {...register("email", {
                required: "Email is required",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            /> */}
            <div className="grid grid-cols-1 gap-x-2">
              <Input
                label="Full Name"
                {...register("shipping_address.first_name", {
                  required: "full name is required",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                placeholder="Full Name"
              />
            </div>
            {/* <div className="grid grid-cols-1 gap-x-2" >
              <Input
                label="Last name"
                {...register("shipping_address.last_name", {
                  required: "Last name is required",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                placeholder="Last name"
              />
            </div> */}
            {/* <Input
              label="Company"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            /> */}
            <Input
              label="Street Address"
              {...register("shipping_address.address_1", {
                required: "Address is required",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
              placeholder="2972 Westheimer Rd. Santa Ana"
            />
            <Input
              label="City"
              {...register("shipping_address.city", {
                required: "City is required",
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
              placeholder="Westheimer"
            />
            <div className="grid grid-cols-2 gap-x-2 mb-2">

              <Input
                label="State / Region"
                {...register("shipping_address.province")}
                autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
                placeholder="Manchester"
              />
              <Input
                label="Postal Code"
                {...register("shipping_address.postal_code", {
                  required: "Postal code is required",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                placeholder="85486"
              />
            </div>
            {/* <CountrySelect
              {...register("shipping_address.country_code", {
                required: "Country is required",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="State / Province"
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Phone"
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            /> */}
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
