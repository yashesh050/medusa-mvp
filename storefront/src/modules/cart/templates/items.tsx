import { LineItem, Region } from "@medusajs/medusa"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {

  return (
    <div>
      <div className=" border-gray-200  flex items-center py-9 mb-6">
        <h1 className="text-xl-semi text-xl">Order Details</h1>
      </div>
      <div className="grid grid-cols-1  ">
        {items && region
          ? items
            .sort((a, b) => {
              return a.created_at > b.created_at ? -1 : 1
            })
            .map((item, index, isLast) => {
              return <Item key={item.id} item={item} region={region} isLast={index === items.length - 1} />
            })
          : Array.from(Array(5).keys()).map((i) => {
            return <SkeletonLineItem key={i} />
          })}
      </div>
    </div>
  )
}


export default ItemsTemplate
