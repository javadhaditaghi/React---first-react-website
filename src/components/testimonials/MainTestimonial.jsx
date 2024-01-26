import TopTitle from "./topTitle/topTitle"
import { Container } from "react-bootstrap"
import TestimonialCarousel from "./testimonialCarousel/testimonialCarousel"




const Testimonial = () => {

    return (
        <Container className="mt-4">
            <TopTitle
                topTxt="Testimonial"
                headerTxt="What Do They Say About Clening Services?"
            ></TopTitle>
            <TestimonialCarousel></TestimonialCarousel>
        </Container>

    )
}


export default Testimonial

