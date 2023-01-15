import React, { Component } from "react";

import BlackCar from "../asset/CarBasic/black-car.jpg";
// muốn dùng hình nào thì import component của hình đó vào
import RedCar from "../asset/CarBasic/red-car.jpg";
import SilverCar from "../asset/CarBasic/silver-car.jpg";
import SteelCar from "../asset/CarBasic/steel-car.jpg";

import styles from "./Car.module.css"; // để tạo quan hệ 1-1 giữa css và class, ta thêm .module vào giữa=> module hóa css cho 1 component. Nếu ko tất cả các component sẽ ăn chung css nếu trùng className
console.log(styles); // mã hóa tên class. Để ko phải dùng mã này, thì dùng cặp { tenFileCss.<tenClass> }

export default class Car extends Component {
  state = {
    carImage: BlackCar,
  };

  changeCar(color) {
    let newImage;
    switch (color) {
      case "red":
        newImage = RedCar;
        break;

      case "black":
        newImage = BlackCar;
        break;

      case "silver":
        newImage = SilverCar;
        break;

      case "steel":
        newImage = SteelCar;
        break;

      default:
        break;
    }
    if (!newImage) return;
    this.setState({
      carImage: newImage,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img
              className={styles.thumbnail}
              src={this.state.carImage}
              alt=""
            />
            {/* mặc định hình hiển thị đầu tiên là BlackCar */}
          </div>

          <div className="col-5">
            <button
              onClick={() => {
                this.changeCar("black");
              }}
              className={styles.btn}
            >
              Black
            </button>

            <button
              onClick={() => {
                this.changeCar("red");
              }}
              className={styles.btn}
            >
              Red
            </button>

            {/* Đối với function có tham số đầu vào thì khi gắn sự kiện phải bọc "cha" vào */}

            <button
              onClick={() => {
                this.changeCar("silver");
              }}
              className={styles.btn}
            >
              Silver
            </button>

            <button
              onClick={() => {
                this.changeCar("steel");
              }}
              className={styles.btn}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
