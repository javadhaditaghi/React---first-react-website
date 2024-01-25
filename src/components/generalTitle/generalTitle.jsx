import styles from "./generalTitle.module.css"

const GeneralTitle = (props) => {
    return (

        <div className="text-center mt-5 pt-4">
            <span style={{ color: "#F37649" }}>{props.topTxt}</span>
            <h2 className={styles.header}>{props.headerTxt}</h2>
        </div>

    )
}

export default GeneralTitle;