import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

function Hero(props) {
    return (
        <Container>
            <Row>
                <Col>{props.children}</Col>
                <Col><Image src='../../src/assets/hero-repair.svg' className='py-5' /></Col>
            </Row>

        </Container>
    );
}

export default Hero;