import promiseDelay from "./delay"

const productsPricingService = {

    getAll:async ()=>{
        return await promiseDelay(1000,[{
            id:1,
            name:"Mastercard Black"

        },{
            id:2,
            name:"Mastercard Gold"

        },{
            id:3,
            name:"Mastercard Silver"

        },{
            id:4,
            name:"Visa Black"
        }])

    }
}




export default productsPricingService