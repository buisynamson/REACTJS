import React from "react";
import SingleProduct from "./Single";
import styles from "./Glass.module.css";

export default function ProductList(props) {
  return (
    <React.Fragment>
      <div className={styles.row}>
        <div className="container">
          <div className={styles.main}>
            {props.glasses.map((glass) => {
              return <SingleProduct key={glass.id} glass={glass} />;
            })}
            <div className={styles.card_item}>
              <img
                className={styles.model_img}
                src="./glassesImage/model.jpg"
              />
            </div>
          </div>
          <div className="buttons">
            {props.btns.map((btns) => {
              return (
                <button
                  className={styles.btn}
                  value={btns.name}
                  onClick={props.handleBtns}
                >
                  {" "}
                  <img className={styles.img_btn} src={btns.url} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
