import React from 'react';
import styles from "./aboutUsCard.module.css"



const FAQCard = ({ topDescription, title }) => {

    return (
        <>
            <div className='h-100 d-flex flex-column justify-content-center'>
                <span style={{ color: "#F37649" }}>{topDescription}</span>
                <h1 className={styles.mainTextStyle}> {title}</h1>


            </div>
        </>
    )
}


export default FAQCard