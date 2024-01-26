import CountUpWrapper from "./countUpWrapper"
import CountUp from "react-countup";
import "./CountUpCard.css"




const CountUpCard = ({ number, title }) => {
    return (
        <CountUpWrapper>
            <div className="number">
                <CountUp duration={7} className="counter" end={number} />
                <p>{title}</p>

            </div>

        </CountUpWrapper>

    )
}

export default CountUpCard
