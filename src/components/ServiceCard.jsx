
const ServiceCard = ({theService}) => {
  return (
    <div className="flex  hover:transform hover:scale-[1.03] cursor-pointer rounded-2xl flex-col p-4 justify-start gap-5 shadow-md ring-1 ring-slate-200">
       <img className="bg-coral-red rounded-full p-2" src={theService.imgURL} width={60}  alt="a logo" />
       <h2 className="font-bold text-2xl">{theService.label}</h2>
       <p className="font-montserrat  ">{theService.subtext}</p>
    </div>
  )
}

export default ServiceCard
