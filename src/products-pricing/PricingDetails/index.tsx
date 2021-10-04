import { useSetRecoilState } from "recoil"
import { contextViewAtom } from "../../recoil"

const PricingDetails = ()=>{
    const setContextView=useSetRecoilState(contextViewAtom)

    return <div>
        PricingDetails
    <button  onClick={()=>{
            setContextView("NewPricing")
    }}  > Go to NewPricing  </button>
    </div>
}
  
export default PricingDetails