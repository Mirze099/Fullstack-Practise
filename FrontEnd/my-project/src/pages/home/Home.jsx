import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={`${styles.hero} md:py-[21rem] lg:px-56`}>
        <div className={`${styles.heroParag}  px-12`}>
          <p className={`${styles.heroP}`}>Process Visa without within hours</p>
          <h1>
            Immigrations & <br /> Visa Consultation
          </h1>
          <button>Book Consultancy</button>
        </div>
        <img
          src="https://preview.colorlib.com/theme/immigration/img/header-img.png"
          alt=""
          className="w-5/12"
        />
      </div>
      <div className={`${styles.heroWrapper} px-12`}>
        <div className={`${styles.heroWrapperLeft}`}>
          <h1>
            Start planning your <br /> New Dream
          </h1>
        </div>
        <div className={`${styles.heroWrapperCenter}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className={`${styles.heroWrapperRight}`}>
          <button>Request Free Consultancy</button>
        </div>
      </div>
      <div
        className={`${styles.cards} px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}
      >
        <div className={`${styles.cardsHeader} px-12`}>
          <h1>Requirements to be Immigrants</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={`${styles.card} px-12`}>
          <div className={`${styles.cardImg} px-12`}>
            <img
              src="https://preview.colorlib.com/theme/immigration/img/s1.jpg"
              alt=""
            />
          </div>
          <div className={`${styles.cardInfo} px-12`}>
            <span>United States</span>
            <h1>Addiction When Gambling Becomes A Problem</h1>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur</p>
        </div>
        </div>
      </div>
    </div>
  );
}
