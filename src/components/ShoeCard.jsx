// eslint-disable-next-line react/prop-types
const ShoeCard = ({ObjShoe,handleImages,currentImage}) => {
    
  return (
    <div className={`border-2  cursor-pointer p-3 bg-card bg-cover bg-center rounded-xl ${currentImage===ObjShoe.bigShoe?"border-coral-red":"border-transparent"}`}
    onClick={()=>{handleImages(ObjShoe.bigShoe)}}
    >
        <img src={ObjShoe.bigShoe} width={100} height={40} alt="shoe" />   
    </div>
  )
}

export default ShoeCard
