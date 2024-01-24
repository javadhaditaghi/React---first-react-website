import Button from 'react-bootstrap/Button';
import styles from "./button.module.css";

function StyledButton() {
    return (
        <>
            <Button className={styles.butStyle}>Primary</Button>
        </>
    );
}

export default StyledButton;