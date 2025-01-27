// eslint-disable-next-line react/prop-types
const Button = ({iconUrl,label,className}) => {
  if(className)
  { 
    return <button className={"flex px-10 py-3 items-center gap-3 rounded-full text-[18px] font-[550] mt-10 cursor-pointer "+className}
    >{label}
    {iconUrl && <img src={iconUrl} alt="right-arrow" />}
    </button>

  }else{
    return <button className="flex bg-coral-red px-10 py-3 items-center gap-3 rounded-full text-[18px] font-[550] 
    text-white mt-10 cursor-pointer" 
    >{label}
    {iconUrl && <img src={iconUrl} alt="right-arrow" />}
    </button>
  }
}

export default Button
