import { useSetRecoilState } from "recoil"
import { contextViewAtom } from "../../recoil"

const PricingProducts = ()=>{

    const setContextView=useSetRecoilState(contextViewAtom)

    return <div>
        
        PricingProducts
    
    <button  onClick={()=>{
            setContextView("PricingDetails")
    }}  > Go to PricingDetails  </button>
    
 </div>
}
  
export default PricingProducts