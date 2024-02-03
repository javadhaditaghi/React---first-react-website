import Header from './heroHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Hero() {
    return (
        <Container>
            <Row className='mx-1 mx-sm-0'>
                <Col xs={12} md={6} className='mt-4 mt-md-0'><Header topDescription="Commited to top quality services"
                    title="QUALITY REPAIR AND INSTALLATION OF YOUR HOME"
                    shortDescription="Many desktop publishing packages and web page 
                    editors now use Lorem Ipsum as their default model text, and a search for 
                    'lorem ipsum' will uncover many web sites still in their infancy" /></Col>
                <Col xs={12} md={6}><Image src='../../src/assets/hero-repair.svg' className='py-md-5 pb-5 mb-5 mb-sm-0' /></Col>
            </Row >

        </Container >
    );
}

export default Hero;