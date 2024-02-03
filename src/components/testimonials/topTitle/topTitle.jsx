import styles from "./topTitle.module.css";
import MainTestimonial from "../MainTestimonial";
import StyledButton from "../../button/button";


const TopTitle = (props) => {

    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-md-5 text-center text-md-start">
            <div className={styles.textWrapper}>

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