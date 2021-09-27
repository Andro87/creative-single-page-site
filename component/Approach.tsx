import styles from "./Approach.module.scss";
import React from "react";
interface Props {
    readonly number: string;
    readonly header: string;
    readonly paragraph: string;
    readonly margin?: string;
}

const Approach: React.FunctionComponent<Props> = props => {
    const { number, header, paragraph, margin } = props;
    return (
        <div className={`${styles.approach} ${styles[margin]}`}>
            <p className={styles.number}>{number}</p>

            <h3> {header}</h3>
            <p>{paragraph}</p>
        </div>
    );
};
export default Approach;
