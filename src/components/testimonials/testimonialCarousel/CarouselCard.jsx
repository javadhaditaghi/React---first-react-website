import Card from 'react-bootstrap/Card';
import "./CarouselCard.css"


const CarouselCard = () => {
    return (
        <Card className='testiCard'>
            <Card.Body className='d-flex flex-row p-0'>
                <div className='p-5'>
                    <Card.Title><img src='../../../../src/assets/stars.svg'></img></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Card.Text>
                </div>
                <div className="position-relative ">
                    <img className="testiphoto" src="../../../../src/assets/testimoniaPlaceholder.png" />

                </div>


            </Card.Body>
        </Card>

    )
}

export default CarouselCard 