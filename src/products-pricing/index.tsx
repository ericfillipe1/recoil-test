import { useRecoilValue } from "recoil"
import { contextViewAtom } from "../recoil"
import NewPricing from "./NewPricing"
import PricingDetails from "./PricingDetails"
import PricingProducts from "./PricingProducts"
import Products from "./Products"


const Containers = {
    NewPricing,
    PricingDetails,PricingProducts,
    Products
}


const ProductsPricing = ()=>{
    const contextView =useRecoilValue(contextViewAtom)
    const Component  =  Containers[contextView];
    return <Component/>
}
  
export default ProductsPricing