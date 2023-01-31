import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountryDropdown from "../country-dropdown"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 ">

          <Input
            label="Full Name"
            {...register("billing_address.first_name", {
              required: "Full Name is required",
            })}
            autoComplete="given-name"
            errors={errors}
            touched={touchedFields}
            placeholder="Full Name"
          />
          <div className="PhoneLable text-[#2C2F32] text-base font-medium">Phone Number</div>
          <div className="grid gap-x-2 grid-cols-[100px_1fr]">

            <CountryDropdown
              {...register("billing_address.country_code", {
                required: "Country is required",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label=""
              {...register("billing_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
              placeholder="(406) 555-0120"
            />

          </div>

          <Input
            label="Street Address"
            {...register("billing_address.address_1", {
              required: "Address is required",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
            placeholder="2972 Westheimer Rd. Santa Ana"
          />
          <Input
            label="City"
            {...register("billing_address.city", {
              required: "City is required",
            })}
            autoComplete="address-level2"
            errors={errors}
            touched={touchedFields}
            placeholder="Westheimer"
          />

          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label="State / Province"
              {...register("billing_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
              placeholder="Manchester"
            />
            <Input
              label="Postal code"
              {...register("billing_address.postal_code", {
                required: "Postal code is required",
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
              placeholder="85486"
            />

          </div>



        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
