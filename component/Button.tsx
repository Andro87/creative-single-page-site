import styles from "./Button.module.scss";
import React from "react";
interface Props {
    readonly title: string;
    readonly size: string;
    readonly color?: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { title, size, color } = props;
    return (
        <button
            type="button"
            aria-label="button"
            className={`${styles.button} ${styles[size]} ${styles[color]}`}
        >
            {title}
        </button>
    );
};
export default Button;
