import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex items-center max-container py-2 gap-10
    max-xl:flex-col-reverse  w-full">
      <div>
        <img src={offer} width={700} className="object-contain" alt="special offer" />
      </div>
      <div className="flex flex-col items-start gap-15">
        <h1 className="font-palanquin text-8xl font-bold"><span className="text-coral-red">Special </span>Offer</h1>
        <p className="xl:max-w-md font-montserrat text-slate-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque repudiandae quisquam eligendi consequatur maiores delectus eveniet molestiae magnam assumenda!</p>
        <div className="flex gap-5 flex-row items-center">
        <Button  label="View Details"  />
        <Button  label="View Details"  className="bg-white border-1 text-black"/>
        </div>
      </div>


    </section>
  )
}

export default SpecialOffer
