import scss from "./Home.module.scss";
import text from "../../assets/back-текст.svg";
import { useState } from "react";
import image from "../../assets/30046921b 1.svg";
import arrow from "../../assets/down-arrow 1.svg";

function Home() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const cart = [
    {
      img: image,
      span: "Женские кроссовки Puma Force 1 Shadow",
      h1: "190 789 ₽ ",
      p: "Удалить",
    },
    {
      img: image,
      span: "Женские кроссовки Puma Force 1 Shadow",
      h1: "190 789 ₽ ",
      p: "Удалить",
    },
    {
      img: image,
      span: "Женские кроссовки Puma Force 1 Shadow",
      h1: "190 789 ₽ ",
      p: "Удалить",
    },
  ];
  return (
    <section className={scss.Home}>
      <h1>
        Кроссовки известных брендов <br /> с доставкой по России и СНГ
      </h1>
      <span>
        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, <br /> Converse
        и многие другие по низким ценам
      </span>
      <button onClick={() => setActive(!active)}>Перейти к покупкам</button>
      {active && <div className={scss.Foon}></div>}
      {active && (
        <div className={scss.menu}>
          <div className={scss.top}>
            <h1>Оформление заказа</h1>
            <span>Заказ 3456 67</span>
          </div>
          <div className={scss.contai}>
            <h3>
              <span>Товаров в заказе:</span>3 шт
            </h3>
            <h3>
              <span>Общая сумма заказа:</span>25 789 ₽
            </h3>
            <p onClick={() => setMenu(!menu)}>
              Состав заказа <img src={arrow} alt="" />
            </p>
            {menu && (
              <div className={scss.contai_cart}>
                {cart.map((item, index) => (
                  <div key={index} className={scss.cart}>
                    <img src={item.img} alt="" />
                    <h1>
                      <span>{item.span}</span>
                      {item.h1}
                    </h1>
                    <p>{item.p}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={scss.contai_input}>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Номер телефона" />
            <input type="email" placeholder="E-mail" />
          </div>
          <button>Оформить заказ</button>
        </div>
      )}
      <img className={scss.fon} src={text} alt="" />
    </section>
  );
}

export default Home;
