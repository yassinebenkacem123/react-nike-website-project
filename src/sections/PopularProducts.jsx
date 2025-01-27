
import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-10 mt-4 flex flex-col justify-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-[550]">Our <span className="text-coral-red">Popular</span> Products</h2>
          <p className="text-slate-gray">Experience top Quality and style with Our Products.</p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 
          sm:grid-cols-2 grid-cols-1 max-md:mt-10 mt-6 sm:gap-10 gap-14 ">
          {products.map((product,index)=><PopularProductsCard key={index} mainProduct={product} />)}
        </div>
    </section>
  )
}

export default PopularProducts
