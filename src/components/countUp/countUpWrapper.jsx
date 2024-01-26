import { Container } from "react-bootstrap"
import "./countUpWrapper.css"




const CountUpWrapper = (props) => {
    return (
        <Container fluid className="countUp-wrapper">
            <Container>
                {props.children}
            </Container>
        </Container>
    )
}

export default CountUpWrapper
