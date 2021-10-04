


import {atom, selector}  from 'recoil';
import productsPricingService from './service';


type IProduct = {

}

type IPricing = {
    
}


type TContextContainer =  "NewPricing"| "PricingDetails"|  "PricingProducts" | "Products"


type INewPricing = {
    
}


export const productFromListAtom =atom<IProduct|null>({key:"productFromList", default:null })
export const pricingFromListAtom =atom<IPricing|null>({key:"pricingFromList", default:null })
export const contextViewAtom =atom<TContextContainer>({key:"contextView", default:"Products" })
export const newPricingAtom =atom<INewPricing|null>({key:"newPricing", default:null })




export const productListFilterAtom =atom<string>({key:"productListFilter", default:"" })


export const productListSelector = selector({
    key:"productList",
    get:async ({get})=>{
        const productListFilter =get(productListFilterAtom)
        return (await productsPricingService.getAll()).filter(p=>p.name.indexOf(productListFilter) >-1)
    }
})