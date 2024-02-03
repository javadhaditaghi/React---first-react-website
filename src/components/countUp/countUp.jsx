import { Container } from "react-bootstrap"
import CountUpCard from "./CountUpCard"
import CountUpWrapper from "./countUpWrapper"




const CountUp = (props) => {
    return (
        <CountUpWrapper>
            <div className="numbers d-flex flex-column flex-md-row justify-content-center">
                <div className="d-flex flex-row">
                    <CountUpCard number={105} title="PROJECTS" />
                    <CountUpCard number={517} title="LOCATIONS" />
                </div>
                <div className="d-flex flex-row">
                    <CountUpCard number={468} title="GROWTH" />
                    <CountUpCard number={468} title="HAPPY CUSTOMER" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="countText">
                    <p>For those who wish to improve their living conditions or have purchased a mansion to be renovated we offer various renovation and modernization services.</p>
                </div>


            </div>

        </CountUpWrapper>


    )
}

export default CountUp