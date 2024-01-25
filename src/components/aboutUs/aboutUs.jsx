import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./aboutUs.css"
import AboutUsCard from './aboutCard';

function AboutUs() {
    return (
        <Container fluid className='aboutUs-wrapper' style={{ marginTop: "-130px", backgroundColor: "var(--Color-7, #FFF7F4)" }}>
            <Container>
                <Row>
                    <Col><AboutUsCard
                        title="Let’s Do Renovation with a 10 Year Guarantee"
                        topDescription="About Us"
                        shortDescription="Simplify your integration using Stripe Checkout. It dynamically adapts to your customer’s device and location to increase conversion."
                        bulletOne="Upgrade your customer experience instantly"
                        bulletTwo="Retain more, happier customers"
                        bulletThree="Start with done-for-you account setup"


                    /></Col>
                    <Col><img src='../../../src/assets/ConstructionEngineer.svg' /></Col>
                </Row>
            </Container>

        </Container>
    );
}

export default AboutUs;