import scss from "./Heder.module.scss";
import Vector from "../../assets/Vector.svg";
import cr from "../../assets/30046921b 1.svg";
import trash from "../../assets/trash 1.svg";
import { useState } from "react";

const Heder = () => {
  const [active, setActive] = useState(false);
  const cart = [
    {
      img: cr,
      h1: "Женские кроссовки Puma Force 1 Shadow",
      price: "8 789 ₽ ",
      mus: trash,
    },
    {
      img: cr,
      h1: "Женские кроссовки Puma Force 1 Shadow",
      price: "8 789 ₽ ",
      mus: trash,
    },
    {
      img: cr,
      h1: "Женские кроссовки Puma Force 1 Shadow",
      price: "8 789 ₽ ",
      mus: trash,
    },
    {
      img: cr,
      h1: "Женские кроссовки Puma Force 1 Shadow",
      price: "8 789 ₽ ",
      mus: trash,
    },
    {
      img: cr,
      h1: "Женские кроссовки Puma Force 1 Shadow",
      price: "8 789 ₽ ",
      mus: trash,
    },
    {
      img: cr,
      h1: "Женские кроссовки Puma Force 1 Shadow",
      price: "8 789 ₽ ",
      mus: trash,
    },
  ];
  return (
    <section className={scss.Heder}>
      <div onClick={() => setActive(!active)} className={scss.container}>
        <h1>SneakMax</h1>
        <div className={scss.contai_a}>
          <a href="">Каталог</a>
          <a href="">О нас</a>
          <a href="">Подбор товара</a>
          <a href="">Наша команда</a>
          <a href="">Доставка и оплата</a>
          <a href="">Контакты</a>
          <p>
            Корзина
            <img onClick={() => setActive(!active)} src={Vector} alt="" />
            {active && <div className={scss.Fon}></div>}
            {active && (
              <div className={scss.corzin}>
                <div className={scss.contai_cart}>
                  {cart.map((item, index) => (
                    <div key={index} className={scss.cart}>
                      <img src={item.img} alt="" />
                      <div className={scss.title}>
                        <span>{item.h1}</span>
                        <h1>{item.price}</h1>
                      </div>
                      <img src={item.mus} alt="" />
                    </div>
                  ))}
                </div>
                <div className={scss.bottom}>
                  <h2>
                    <span>Итого:</span>
                    25 789 ₽
                  </h2>
                  <button>Перейти в корзину</button>
                </div>
              </div>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heder;
