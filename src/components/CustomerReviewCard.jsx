import { star } from "../assets/icons"
const CustomerReviewCard = ({reviewData}) => {
  return (
    <div className="flex flex-col items-center p-4 gap-4">
        <img src={reviewData.imgURL} alt="costumer"
          className="rounded-full" width={90} />
        <p className="font-montserrat text-lg  text-slate-gray text-center ">{reviewData.feedback}</p>
        <div className="flex gap-3">
           <img src={star} alt="star"/>
           <p className="text-lg">({reviewData.rating})</p>
        </div>
        <h2 className="font-bold font-palanquin text-2xl">{reviewData.customerName}</h2>
    </div>
  )
}

export default CustomerReviewCard
