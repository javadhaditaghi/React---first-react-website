import Card from 'react-bootstrap/Card';
import "./CarouselCard.css"



const CarouselCard = (props) => {
    return (
        <Card className='testiCard'>
            <Card.Body className='d-flex flex-row p-0'>
                <div className='d-flex flex-column justify-content-center p-2 pt-0 p-lg-3 p-xl-5'>
                    <Card.Title className='testiStars'><img src={props.stars}></img></Card.Title>
                    <Card.Text>
                        {props.description}
                        <br></br><br></br>
                    </Card.Text>

                    <Card.Text>
                        <p><strong>{props.name}</strong> <br></br>{props.solvedIssue}</p>
                    </Card.Text>
                </div>
                <div className="position-relative ">
                    <img className="testiphoto" src={props.mainPicture} />

                </div>


            </Card.Body>
        </Card>

    )
}

export default CarouselCard 