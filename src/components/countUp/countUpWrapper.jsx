import { Container } from "react-bootstrap"
import "./countUpWrapper.css"




const CountUpWrapper = (props) => {
    return (
        <Container fluid className="countUp-wrapper">

            {props.children}

        </Container>
    )
}

export default CountUpWrapper
