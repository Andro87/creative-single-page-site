import styles from "./Slide.module.scss";
import React, { ReactNode } from "react";
import Next from "../svg/icon-arrow-next.svg";
import Prev from "../svg/icon-arrow-previous.svg";

interface Props {
    readonly image: ReactNode;
    readonly name: string;
    readonly year: string;
    readonly header: string;
    readonly onPrev: Function;
    readonly onNext: Function;
}

const Slide: React.FunctionComponent<Props> = props => {
    const { image, name, year, header, onPrev, onNext } = props;
    return (
        <div className={styles.embla__slide}>
            <div className={styles.slide_img}>
                {image}

                <div className={styles.image_info}>
                    <h3> {name} </h3>
                    <p> {year} Project</p>
                </div>
            </div>

            <div className={styles.slide_info}>
                <h2> {header}</h2>

                <div className={styles.btn_wrap}>
                    <button
                        type="button"
                        aria-label="previous"
                        className={styles.btn}
                        onClick={() => onPrev()}
                    >
                        <Prev />
                    </button>
                    <button
                        type="button"
                        aria-label="next"
                        className={styles.btn}
                        onClick={() => onNext()}
                    >
                        <Next />
                    </button>
                </div>
                <div className={styles.wave_white}></div>
            </div>
        </div>
    );
};
export default Slide;
