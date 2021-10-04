import { useRecoilValue } from "recoil"
import { newPricingAtom } from "../../recoil"

const NewPricing = ()=>{


    const value =useRecoilValue(newPricingAtom)
    return <div  >NewPricing</div>
}
  
export default NewPricing