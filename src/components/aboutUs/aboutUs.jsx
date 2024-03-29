import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./aboutUs.css"
import AboutUsCard from './aboutCard';
import FAQCard from './FAQcard';

function AboutUs(props) {
    return (
        <Container fluid className={props.stylingOne} style={{ backgroundColor: "var(--Color-7, #FFF7F4)" }}>
            <Container>
                <Row className={props.aboutUs}>
                    {
                        props.aboutUs == "aboutUs" ?
                            <>
                                <Col xs={12} md={6}><AboutUsCard
                                    title="Let’s Do Renovation with a 10 Year Guarantee"
                                    topDescription="About Us"
                                    shortDescription="Simplify your integration using Stripe Checkout. It dynamically adapts to your customer’s device and location to increase conversion."
                                    bulletOne="Upgrade your customer experience instantly"
                                    bulletTwo="Retain more, happier customers"
                                    bulletThree="Start with done-for-you account setup"
                                /></Col>
                                <Col xs={12} md={6}><img src='../../../src/assets/ConstructionEngineer.svg' /></Col>
                            </>

                            :
                            <div className="d-flex flex-column flex-column-reverse flex-md-row ">
                                <Col xs={12} md={6}><FAQCard
                                    topDescription="Frequently Asked Question"
                                    title="Do You Have Any Question"
                                >
                                </FAQCard></Col>
                                <Col xs={12} md={6}><img src='../../../src/assets/ConstructionEngineer.svg' /></Col>
                            </div>

                    }




                </Row>
            </Container>

        </Container>
    );
}

export default AboutUs;