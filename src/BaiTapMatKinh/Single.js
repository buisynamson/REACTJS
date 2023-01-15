import React from "react";
import styles from "./Glass.module.css";

export default function Single(props) {
  return (
    <React.Fragment>
      <div className={styles.card_item}>
        <img className={styles.model} src="./glassesImage/model.jpg" />
        <img src={props.glass.url} className={styles.card_img} />
        <div className={styles.info}>
          <h5>{props.glass.name}</h5>
          <p>{props.glass.desc}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
