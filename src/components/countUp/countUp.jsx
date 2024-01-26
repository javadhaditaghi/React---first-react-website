import { Container } from "react-bootstrap"
import CountUpCard from "./CountUpCard"
import CountUpWrapper from "./countUpWrapper"




const CountUp = (props) => {
    return (
        <CountUpWrapper>
            <div className="numbers">
                <CountUpCard number={105} title="PROJECTS" />
                <CountUpCard number={517} title="LOCATIONS" />
                <CountUpCard number={468} title="GROWTH" />
                <CountUpCard number={468} title="HAPPY CUSTOMER" />
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