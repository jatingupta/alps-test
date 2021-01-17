import { useState } from "react";
import styles from "./Collapse.module.scss";

const Collapse = ({
    heading,
    children
}) => {
    const [toggle, updateToggle] = useState(false);

    return (
        <div className={`${styles.collapse} ${toggle ? styles.up : styles.down}`}>
            <span className={styles.heading} onClick={() => updateToggle(!toggle)}>{heading}<i>v</i></span>
            <div className={`${styles.content} `} style={{
                display: toggle ? "block" : "none"
            }}>
                {children}
            </div>
        </div>
    );
}
// TODO: add proptype validations

export default Collapse;