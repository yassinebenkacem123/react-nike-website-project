import { reviews } from "../constants"
import CustomerReviewCard from "../components/CustomerReviewCard"
const CostumerReviews = () => {
  return (
    <section className="max-container flex flex-col gap-4 items-center">
      <h1 className="capitalize font-palanquin text-center text-4xl tex font-bold">What our
        <span className="text-coral-red"> customers </span>
        say</h1>
        <p className="text-center font-montserrat m xl:max-w-lg text-slate-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores quod necessitatibus cumque explicabo. Ea obcaecati sed iure sit provident?</p>
        <div className="flex felx-col gap-4 xl:flex-row max-lg:flex-wrap justify-center">
          {reviews.map((review,index)=><CustomerReviewCard key={index} reviewData={review}/>)}
        </div>
    </section>
  )
}

export default CostumerReviews
