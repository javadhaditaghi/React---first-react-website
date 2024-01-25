import React from 'react';
import styles from "./aboutUsCard.module.css"
import StyledButton from '../button/button';



const AboutUsCard = ({ topDescription, title, shortDescription, bulletOne, bulletTwo, bulletThree }) => {

    return (
        <>
            <div className='h-100 d-flex flex-column justify-content-center'>
                <span style={{ color: "#F37649" }}>{topDescription}</span>
                <h1 className={styles.mainTextStyle}> {title}</h1>
                <p style={{ color: "#888" }}>{shortDescription}</p>
                <ul className={styles.bulletContainer} >
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0893 5.00964C18.4147 5.33508 18.4147 5.86272 18.0893 6.18815L8.08928 16.1882C7.76384 16.5136 7.2362 16.5136 6.91077 16.1882L1.91076 11.1882C1.58533 10.8627 1.58533 10.3351 1.91076 10.0096C2.2362 9.6842 2.76384 9.6842 3.08928 10.0096L7.50002 14.4204L16.9108 5.00964C17.2362 4.6842 17.7638 4.6842 18.0893 5.00964Z" fill="#F37649" />
                    </svg>&nbsp;&nbsp;{bulletOne}</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0893 5.00964C18.4147 5.33508 18.4147 5.86272 18.0893 6.18815L8.08928 16.1882C7.76384 16.5136 7.2362 16.5136 6.91077 16.1882L1.91076 11.1882C1.58533 10.8627 1.58533 10.3351 1.91076 10.0096C2.2362 9.6842 2.76384 9.6842 3.08928 10.0096L7.50002 14.4204L16.9108 5.00964C17.2362 4.6842 17.7638 4.6842 18.0893 5.00964Z" fill="#F37649" />
                    </svg>&nbsp;&nbsp;{bulletTwo}</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0893 5.00964C18.4147 5.33508 18.4147 5.86272 18.0893 6.18815L8.08928 16.1882C7.76384 16.5136 7.2362 16.5136 6.91077 16.1882L1.91076 11.1882C1.58533 10.8627 1.58533 10.3351 1.91076 10.0096C2.2362 9.6842 2.76384 9.6842 3.08928 10.0096L7.50002 14.4204L16.9108 5.00964C17.2362 4.6842 17.7638 4.6842 18.0893 5.00964Z" fill="#F37649" />
                    </svg>&nbsp;&nbsp;{bulletThree}</li>
                </ul>
                <div className="ps-4 pt-0">
                    <StyledButton></StyledButton>
                </div>

            </div>
        </>
    )
}


export default AboutUsCard