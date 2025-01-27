import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section className="max-container flex justify-between max-xl:flex-col w-full max-lg:gap-10">
      <div className="flex flex-col gap-4 max-w-[600px]">
        <h1 className="capitalize font-palanquin text-4xl font-bold mb-4">We Provide you <span className="text-coral-red">super quality</span> shoes</h1>
        <p className="text-slate-gray font-montserrat ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam odit ipsum voluptatum cumque? Dolorum corrupti commodi rem nostrum alias?</p>
        <div><Button label="View Details" /></div>
      </div>
      <div className="bg-cover bg-center object-contain flex justify-center items-center">
        <img src={shoe8} width={580} alt="shoes8" />
      </div>

    </section>
  )
}

export default SuperQuality
