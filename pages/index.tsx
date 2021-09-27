import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Button from "../component/Button";
import Logo from "../svg/logo.svg";
import Hamburger from "../svg/icon-hamburger.svg";
import Close from "../svg/icon-cross.svg";

import Approach from "../component/Approach";
import Slide from "../component/Slide";
import { useState } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
export default function Home() {
    const [open, setOpen] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    return (
        <div className={styles.main_container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Frontend Mentor | Creative single page site"
                />
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>

            <header className={styles.header}>
                <Logo />
                <button
                    type="button"
                    aria-label="hamburger_btn"
                    className={styles.hamburger_btn}
                    onClick={() => setOpen(!open)}
                >
                    {!open ? <Hamburger /> : <Close />}
                </button>

                <nav
                    className={`${styles.navigation}
                       ${open ? styles.navigation_mobile : null} `}
                >
                    <a href="#">About</a>
                    <a href="#">Service</a>
                    <a href="#">Projects</a>
                    <Button
                        title="  Schedule a call"
                        size="bigger"
                        color="black"
                    />
                </nav>
            </header>
            <main className={styles.main}>
                <picture className={styles.main_img}>
                    <source
                        srcSet="/desktop/image-hero.jpg"
                        media="(min-width:1200px)"
                    />
                    <source
                        srcSet="/tablet/image-hero.jpg"
                        media="(min-width:700px)"
                    />
                    <img src="/mobile/image-hero.jpg" alt="" />
                </picture>

                <div className={styles.main_info}>
                    <h1> Branding & website design agency</h1>
                    <p>
                        We specialize in visual storytelling by creating
                        cohesive brand and website design solutions for small
                        businesses, giving lasting impressions to audiences in a
                        digital world.
                    </p>
                    <Button title="Learn More" size="smaller" />
                </div>
            </main>
            <section
                className={styles.section_description}
                aria-label="description"
            >
                <div className={styles.design_container}>
                    <picture className={styles.design_img}>
                        <source
                            srcSet="/desktop/image-strategic.jpg"
                            media="(min-width:1200px)"
                        />
                        <source
                            srcSet="/tablet/image-strategic.jpg"
                            media="(min-width:700px)"
                        />
                        <img src="/mobile/image-strategic.jpg" alt="" />
                    </picture>

                    <div className={styles.design_info}>
                        <div className={styles.wave_red}></div>
                        <h2>
                            <span> Design </span> is strategic.
                        </h2>
                        <p>
                            A well-crafted design strategy consistently produces
                            desired outcomes and brand awareness. We are firm
                            believers that success lies in creative
                            collaboration with our clients.
                        </p>
                        <a href="#">Schedule a call</a>
                    </div>
                </div>

                <div className={styles.approach_container}>
                    <div className={styles.approach_info}>
                        <h2> Our approach for creating a winning brand</h2>
                    </div>
                    <div className={styles.approach_wrap}>
                        <Approach
                            number="01"
                            header="Brand strategy"
                            paragraph="
                                Brand strategy is critical for long-term
                                success. Outshining competitors and capturing
                                the target audience are key.
                            "
                        />

                        <Approach
                            number="02"
                            header="Brand design"
                            paragraph="
                            Keeping the brand design unique and meaningful helps in communicating the brand’s timeless 
                            value effectively.
                            "
                            margin="margin"
                        />

                        <Approach
                            number="03"
                            header=" Web design"
                            paragraph="
                            A beautifully crafted website is the best tool for brand awareness, and ultimately results 
                            in increased revenues.
                            "
                        />
                    </div>
                </div>
            </section>

            <section className={styles.section_slide} aria-label="slide">
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <Slide
                            image={
                                <picture>
                                    <source
                                        srcSet="/desktop/image-slide-1.jpg"
                                        media="(min-width:1200px)"
                                    />
                                    <source
                                        srcSet="/tablet/image-slide-1.jpg"
                                        media="(min-width:700px)"
                                    />
                                    <img
                                        src="/mobile/image-slide-1.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="Lean Product Roadmap "
                            year=" 2019 "
                            header=" Brand naming & guidelines"
                            onPrev={() => emblaApi.scrollPrev()}
                            onNext={() => emblaApi.scrollNext()}
                        />
                        <Slide
                            image={
                                <picture>
                                    <source
                                        srcSet="/desktop/desktop-slide-2.jpg"
                                        media="(min-width:1200px)"
                                    />
                                    <source
                                        srcSet="/tablet/image-slide-2.jpg"
                                        media="(min-width:700px)"
                                    />
                                    <img
                                        src="/mobile/image-slide-2.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="New Majestic Hotel "
                            year=" 2018 "
                            header="  Brand identity & merchandise"
                            onPrev={() => emblaApi.scrollPrev()}
                            onNext={() => emblaApi.scrollNext()}
                        />
                        <Slide
                            image={
                                <picture>
                                    <source
                                        srcSet="/desktop/image-slide-3.jpg"
                                        media="(min-width:1200px)"
                                    />
                                    <source
                                        srcSet="/tablet/image-slide-3.jpg"
                                        media="(min-width:700px)"
                                    />
                                    <img
                                        src="/mobile/image-slide-3.jpg"
                                        alt=""
                                    />
                                </picture>
                            }
                            name="  Crypto Dashboard "
                            year=" 2016 "
                            header="    Brand identity & web design"
                            onPrev={() => emblaApi.scrollPrev()}
                            onNext={() => emblaApi.scrollNext()}
                        />
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <h2>Let&apos;s build something great together.</h2>
                    <Button title="  Schedule a call" size="bigger" />
                </div>
                <div className={styles.wave_footer}></div>
            </footer>
        </div>
    );
}
