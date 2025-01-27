import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const ServicesCp = () => {
  return (
    <section className="flex flex-col lg:flex-row p-4 gap-10 lg:items-center
     max-container max-sm:mt-10 mt-4 w-full">
        {services.map((service,index)=><ServiceCard key={index} theService={service}/>)}

    </section>
  )
}

export default ServicesCp
