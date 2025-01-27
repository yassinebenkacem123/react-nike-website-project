import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import { shoes } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
    let [image,setImage] = useState(bigShoe1);
    function changeShoe(newShoes)
    {
        setImage(newShoes)

    }
  return (
    <section id="home" className="w-full max-container min-h-screen
     flex justify-center items-center
    gap-10 xl:flex-row flex-col">
        <div className="xl:w-2/5 flex flex-col items-start
        w-full max-lx:padding-x  pt-28">
            <p className="font-montserrat text-[20px] text-coral-red
            mb-20">Our Summer Collection</p>
            <h1 className="z-10 font-palanquin xl:whitespace-nowrap bg-white font-bold text-[90px] xl:text-[80] max-sm:text-[50px] ">The New Arrival <br />
                <span className=" text-coral-red"> Nike </span><span>Shoes</span>
               
            </h1>
            <p className="text-[18px] text-slate-gray mt-1 ">Discover stylish Nike arrivals quality 
               comfort and innovation for your active life.
            </p>
            <Button label="Shop Now" iconUrl={arrowRight} />
            <div className="flex w-full justify-around py-6">
                {statistics.map((statistic,index)=>{
                return(
                    <div key={index}>
                        <p className="font-bold text-2xl" key={statistic.label}>{statistic.value}</p>
                        <p key={statistic.va}>{statistic.label}</p>
                    </div>
                    )})}
            </div>
        </div>
       <div className="bg-hero bg-cover bg-center flex jusitfy-center items-center w-full 
       xl:min-h-screen max-xl:py-40 bg-primary relative">
        <img src={image} alt="big-shoe1" width={600}
        height={500} className="xl:ml-10 object-contain ml-10 relative" />
        <div className=" flex w-full items-center justify-center gap-15 py-10 absolute   -bottom-[80px]">
        {shoes.map((shoe,index)=>{
            return( <ShoeCard key={index} ObjShoe={shoe} currentImage={image} handleImages={changeShoe}/>)
           })}
        </div>
       </div>
    </section>
  )
}

export default Hero
