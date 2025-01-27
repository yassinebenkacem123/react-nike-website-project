import Footer from './sections/Footer'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SpecialOffer from './sections/SpecialOffer'
import SuperQuality from './sections/SuperQuality'
import Subscribe from './sections/Subscribe'
import CostumerReviews from './sections/CostumerReviews'
import Nav from './components/Nav'
import ServicesCp from './sections/ServicesCp'
const App = () => {
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r
      padding-b">
       < Hero />
      </section>
      <section className="padding">
       < PopularProducts/>
      </section>
      <section className="padding">
       < SuperQuality/>   
        </section>
      <section className="padding-x py-10">
        <ServicesCp />
      </section>
       <section className="padding-x py-10">
        <SpecialOffer />
       </section>
      <section className="padding bg-pale-blue">
       < CostumerReviews />
      </section>
      <section className="padding-x  sm:py-32 py-16 w-full">
       <Subscribe />
       </section>
      <section className="padding 
      padding-x 
      padding-t
      bg-black 
      pb-8">
       <Footer />
      </section>
    </main>

  )
}

export default App
