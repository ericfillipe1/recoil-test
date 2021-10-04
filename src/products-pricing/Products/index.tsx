import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { contextViewAtom, productListFilterAtom, productListSelector } from "../../recoil"


const Products = ()=>{
    const setContextView=useSetRecoilState(contextViewAtom)
    const [productListFilter,setProductListFilter]=useRecoilState(productListFilterAtom)
    const productListLoadable=useRecoilValueLoadable(productListSelector)


    let lista = <></>
    if (productListLoadable.state !== "hasValue"){
        
        lista= <>carregando</>
    }else {
        lista = <ul>
                {productListLoadable.contents.map(product=>{
                    return <li key={product.id} > {product.name}</li>
                })}
        </ul>;
    }
    

    return <div>

        <input  value={productListFilter}  onChange={(e)=>{
            setProductListFilter(e.target.value)
        }} />
        {lista}
        <button  onClick={()=>{
                    setContextView("PricingProducts")
            }}  > Go to PricingProducts  </button>
        
     </div>
}
  
export default Products