import GeneralTitle from "../generalTitle/generalTitle"
import TutorialCarousel from "./tutorialCarousel"
import { Container } from "react-bootstrap"


const Tutorial = () => {
    return (
        <>
            <Container>
                <GeneralTitle
                    topTxt="Quality features"
                    headerTxt="Tutorials That People Love Most"
                ></GeneralTitle>
                <TutorialCarousel></TutorialCarousel>
            </Container>


        </>

    )
}

export default Tutorial
