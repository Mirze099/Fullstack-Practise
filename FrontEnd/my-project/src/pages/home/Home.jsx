import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("http://localhost:3000/product");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

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
      <div className={`${styles.cardss} px-12`}>
        <div className={`${styles.cardsHeader} px-12`}>
          <h1>Requirements to be Immigrants</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`${styles.cards} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
        >
          {data &&
            data.map((data) => (
              <div className={`${styles.card} px-12`} key={data._id}>
                <div className={`${styles.cardImg} px-12`}>
                  <img src={data.image} alt="" className="w-full" />
                </div>
                <div className={`${styles.cardInfo} px-12`}>
                  <span>{data.country}</span>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
