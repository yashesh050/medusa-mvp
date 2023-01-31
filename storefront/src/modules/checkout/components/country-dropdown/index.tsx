import CountrySelect, {
  CountrySelectProps,
} from "@modules/common/components/country-select"
import { useCart, useRegions } from "medusa-react"
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react"

const CountryDropdown = forwardRef<HTMLSelectElement, CountrySelectProps>(
  ({ placeholder = "Country", ...props }, ref) => {
    const innerRef = useRef<HTMLSelectElement>(null)

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    const { regions } = useRegions()
    const { cart } = useCart()
    //console.log("rrrrr==>", regions);
    const countryOptions = useMemo(() => {
      const currentRegion = regions?.find((r) => r.id === cart?.region_id)

      if (!currentRegion) {
        return []
      }

      return currentRegion.countries.map((country) => ({
        value: country.iso_2,
        label: country.display_name,
      }))
    }, [regions, cart])
    console.log("rrrrr==>", regions);
    return (
      <CountrySelect ref={innerRef} placeholder={placeholder} {...props}>
        {countryOptions.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}

          </option>
        ))}
      </CountrySelect>
    )
  }
)

CountryDropdown.displayName = "CountryDropdown"

export default CountryDropdown
