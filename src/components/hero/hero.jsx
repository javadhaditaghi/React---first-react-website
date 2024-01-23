import Header from './heroHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Hero() {
    return (
        <Container>
            <Row>
                <Col><Header topDescription="Commited to top quality services"
                    title="QUALITY REPAIR AND INSTALLATION OF YOUR HOME"
                    shortDescription="Many desktop publishing packages and web page 
                    editors now use Lorem Ipsum as their default model text, and a search for 
                    'lorem ipsum' will uncover many web sites still in their infancy" /></Col>
                <Col><Image src='../../src/assets/hero-repair.svg' className='py-5' /></Col>
            </Row >

        </Container >
    );
}

export default Hero;