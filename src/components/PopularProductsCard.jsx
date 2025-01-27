import { star } from "../assets/icons"
const PopularProductsCard = ({mainProduct}) => {
  return (
    <div className="flex flex-col xl:w-[300px] justify-center max-sm:items-center">
        <img src={mainProduct.imgURL} className="max-sm:w-[250px] w-[100%] max-sm:h-[300px] shadow-2xl rounded-3xl" width={200} height={200} alt="product" />
        <div className="flex flex-col justify-start gap-2 mt-5">
            <div className="flex gap-2"><img src={star} alt="star" /><p>(4.5)</p></div>
            <h2 className="font-bold text-md ">{mainProduct.name}</h2>
            <p className="font-montserrat text-coral-red ">{mainProduct.price}</p>
        </div>
      
    </div>
  )
}

export default PopularProductsCard
