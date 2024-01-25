import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jsonData from "./steps.json";
import "./steps.css";
import GeneralTitle from '../generalTitle/generalTitle';

function Steps() {
    return (
        <Container>
            <GeneralTitle
                topTxt="How it Work"
                headerTxt="Follow 3 Easy Steps"
            ></GeneralTitle>

            <Row>
                {jsonData.map(step => (
                    <Col key={step.id} className='position-relative'>
                        <div className='stepsWrapper'>
                            <h5><img src='../../../src/assets/check.svg' className='pe-2'></img>{step.title}</h5>
                            <img src={step.icon} alt={step.title} className='absolImg' />
                            <p className='overlaytext'>{step.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Steps;