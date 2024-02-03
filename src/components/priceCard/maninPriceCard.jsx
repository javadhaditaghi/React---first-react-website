
import GeneralTitle from "../generalTitle/generalTitle";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jsonData from './carrdInfo.json'
import "./maninPriceCard.css"
import StyledButton from "../button/button";



const MainPriceCard = () => {

    return (
        <div className="mb-5">
            <GeneralTitle
                topTxt="OUR PRICING"
                headerTxt="Exceptional Cleaning at Reasonable Prices"
            ></GeneralTitle>

            <Container className="mt-4">
                <Row className="pt-md-4 px-3">

                    {jsonData.map(cardinfo => (
                        <Col className="colWrap my-3 my-md-0" md={4}>
                            <Container>
                                <Card className="text-center" key={cardinfo.id}>
                                    <Card.Header>{cardinfo.header}</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="pb-lg-4 pb-xl-4">{cardinfo.price}/mo</Card.Title>
                                        <Card.Text className="px-lg-4 px-xl-5 mx-lg-4 mx-xl-5 mb-lg-4 mb-xl-5">
                                            {cardinfo.text}
                                        </Card.Text>
                                        <Card.Text className="px-lg-4 px-xl-5 mx-lg-4 mx-xl-5 mb-lg-4 mb-xl-5">
                                            {cardinfo.otherInfo}
                                        </Card.Text>
                                        <Button className="PriceCardsButt">Click me!</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>



                    ))}




                </Row>
            </Container>

        </div>





    )
}


export default MainPriceCard