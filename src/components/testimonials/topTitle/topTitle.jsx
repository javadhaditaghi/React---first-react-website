import styles from "./topTitle.module.css";
import MainTestimonial from "../MainTestimonial";
import StyledButton from "../../button/button";


const TopTitle = (props) => {

    return (
        <div className="d-flex justify-content-between align-items-center pt-5">
            <div className="w-50">

                <span style={{ color: "#F37649" }}>{props.topTxt}</span>

                <h2 className={styles.header}>{props.headerTxt}</h2>
            </div>
            <div>
                <StyledButton></StyledButton>
            </div>

        </div>
    )
}


export default TopTitle