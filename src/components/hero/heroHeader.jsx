import React from 'react';
import styles from "./heroHeader.module.css"
import StyledButton from '../button/button';



const Header = ({ topDescription, title, shortDescription }) => {

    return (
        <>

            <div className='h-100 d-flex flex-column justify-content-center '>
                <span style={{ color: "#F37649" }}>{topDescription}</span>
                {/* Using ChatGPT */}
                <h1 className={styles.mainTextStyle}>{title.split(' ').map((word, index) => (
                    <span key={index} style={{ color: ['REPAIR', 'AND', 'INSTALLATION'].includes(word) ? '#F37649' : 'inherit' }}>
                        {word}
                        {index < title.split(' ').length - 1 && ' '}
                    </span>
                ))}</h1>
                {/* Finished Using ChatGPT */}
                <small style={{ color: "#888" }}>{shortDescription}</small>
                <div className='pt-4'>
                    <StyledButton></StyledButton>
                </div>


            </div>


        </>
    )
}


export default Header