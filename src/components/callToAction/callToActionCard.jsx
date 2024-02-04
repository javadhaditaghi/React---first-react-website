import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import StyledButton from '../button/button';
import "./callToActionCard.css";



const CallToActionCard = () => {
    return (
        <Container className='py-5 my-4'>
            <Card className='p-5'>
                <Card.Body>
                    <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                        <div className='flexInfo-wrapper mb-3 mb-md-0'>
                            <Card.Title><h2 style={{ fontWeight: "800" }}>Ready To Launch Your Next Website?</h2></Card.Title>
                            <Card.Text>
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
                            </Card.Text>
                        </div>
                        <div className="text-center text-md-end">
                            <StyledButton ></StyledButton>
                            <p>Or, take a peek inside <a href=''>our service</a></p>

                        </div>
                    </div>

                </Card.Body>
            </Card>


        </Container>

    );
}

export default CallToActionCard