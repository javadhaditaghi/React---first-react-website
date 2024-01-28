import Navigation from './components/navbar/navigation'
import Hero from './components/hero/hero'
import Carousel from './components/carousel/carousel'
import AboutUs from './components/aboutUs/aboutUs'
import Steps from './components/Steps/Steps'
import VideoContainer from './components/video/video'
import MainPriceCard from './components/priceCard/maninPriceCard'
import MainTestimonial from './components/testimonials/MainTestimonial'
import CountUp from './components/countUp/countUp'
import Tutorial from './components/tutorialCarousel/tutorial'
import CallToAction from './components/callToAction/calltoAction'
import CallToActionCard from './components/callToAction/callToActionCard'



function App() {


  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Carousel></Carousel>
      <AboutUs
        stylingOne={"aboutUsWrapper"}
        aboutUs={"aboutUs"}
      ></AboutUs>
      <Steps></Steps>
      <VideoContainer></VideoContainer>
      <MainPriceCard></MainPriceCard>
      <MainTestimonial></MainTestimonial>
      <CountUp></CountUp>
      <Tutorial></Tutorial>
      <AboutUs
        stylingOne={"FAQWrapper"}
        aboutUs={"FAQUs"}
      ></AboutUs>
      <CallToActionCard></CallToActionCard>




    </>
  )
}

export default App
