import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex flex-col items-center max-xl:gap-20 xl:flex-row gap-4">
      <h1 className="font-palanquin xl:max-w-xl font-bold text-4xl">Subscribe for more <span className="text-coral-red ">updates</span> & newsletter</h1>
      <from className="bg-amber-200f border-slate-gray rounded-4xl border-1 flex justify-between items-center w-full" >
        <input className="input" type="email" placeholder="joe@gmail.com" required/>  
        <button className=" cursor-pointer bg-coral-red text-white w-35 h-13 rounded-4xl m-2">sign up</button>
      </from>
    </section>
  )
}

export default Subscribe
