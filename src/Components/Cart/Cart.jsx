import scss from "./Cart.module.scss";
import check from "../../assets/check.svg";
import checkbox_only from "../../assets/checkbox_only.svg";
import { useState } from "react";
import image from "../../assets/image.svg";
import Tovar from "../../assets/Смотреть товар.svg";
import Dobavit from "../../assets/Добавить в корзину.svg";
import Vector from "../../assets/Vector (2).svg";
import Cros from "../../assets/867.svg";
import Frame from "../../assets/Frame 21.svg";

function Cart() {
  const [gen, setGen] = useState("");
  const cros = [
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
    {
      image: image,
      span: "Кроссовки Nike Air Force 1 '07 QS",
      p: "11 000 р",
    },
  ];
  const siz = [
    {
      p: "35",
    },
    {
      p: "36",
    },
    {
      p: "37",
    },
    {
      p: "38",
    },
    {
      p: "39",
    },
    {
      p: "40",
    },
    {
      p: "41",
    },
    {
      p: "42",
    },
    {
      p: "43",
    },
  ];
  const [opis, setOpis] = useState(null);
  return (
    <section className={scss.Cart}>
      <h1>Каталог</h1>
      <div className={scss.container}>
        <div className={scss.parametrs}>
          <h3>Подбор по параметрам</h3>
          <span>Цена, руб</span>
          <div className={scss.price}>
            <input type="text" placeholder="1850" />
            <hr />
            <input type="text" placeholder="25 768" />
          </div>
          <span>Пол</span>
          <div className={scss.gender}>
            <p>
              <img
                onClick={() => setGen("men")}
                src={gen === "men" ? checkbox_only : check}
                alt=""
              />
              мужской
            </p>
            <p onClick={() => setGen("wumen")}>
              <img src={gen === "wumen" ? checkbox_only : check} alt="" />
              женский
            </p>
          </div>
          <span>Размер</span>
          <div className={scss.size}>
            {siz.map((item, index) => (
              <div className={scss.bloc} key={index}>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
          <button>Применить</button>
          <h2>сбросить</h2>
        </div>
        <div className={scss.contai_cros}>
          {cros.map((it, index) => (
            <div
              onClick={() => setOpis(opis === index ? null : index)}
              className={scss.cart_cros}
              key={index}
            >
              <img src={it.image} alt="" />
              <span>{it.span}</span>
              <p>{it.p}</p>
              <div className={scss.hover}>
                <img
                  onClick={() => setOpis(opis === index ? null : index)}
                  src={Tovar}
                  alt=""
                />
                <img src={Dobavit} alt="" />
              </div>
              {opis === index && <div className={scss.Fon}></div>}
              {opis === index && (
                <div className={scss.menu}>
                  <div className={scss.container_top}>
                    <div className={scss.contai_image}>
                      <img src={Cros} alt="" />
                      <div className={scss.contai_mini_img}>
                        <img src={Cros} alt="" />
                        <img src={Cros} alt="" />
                        <img src={Cros} alt="" />
                        <img src={Cros} alt="" />
                        <img src={Cros} alt="" />
                        <img src={Cros} alt="" />
                      </div>
                    </div>
                    <div className={scss.title}>
                      <div className={scss.contai_top}>
                        <p>
                          Артикул:<span>879876</span>
                        </p>
                        <p>
                          В наличии:<h5>13 шт</h5>
                        </p>
                      </div>
                      <h1>Женские кроссовки Puma Force 1 Shadow</h1>
                      <img className={scss.star} src={Frame} alt="" />
                      <p>Выберите размер</p>
                      <div className={scss.size}>
                        <p>36</p>
                        <p>36</p>
                        <p>36</p>
                        <p>36</p>
                        <p>36</p>
                        <p>36</p>
                      </div>
                      <h1 className={scss.price}>
                        19 789 ₽ <h6>20 578 ₽</h6>
                      </h1>
                      <button>Заказать</button>
                      <h4>
                        <img src={Vector} alt="" />
                        Бесплатная доставка до двери
                      </h4>
                      <h4>
                        <img src={Vector} alt="" />
                        Оплата заказа при получении
                      </h4>
                      <h4>
                        <img src={Vector} alt="" />
                        Обмен в течении двух недель
                      </h4>
                    </div>
                  </div>
                  <div className={scss.contai_title}>
                    <h1>
                      Описание
                      <span>
                        Кроссовки Nike Blazer Mid '77 Vintage Suede с <br />{" "}
                        винтажной подошвой возрождают стиль <br /> баскетбольных
                        моделей Nike прошлого, создавая <br /> впечатление, что
                        они хранились в шкафу долгие годы.{" "}
                      </span>
                    </h1>
                    <h1>
                      Характеристики <br />
                      <span>
                        Пол: Мужской <br /> Цвета: Разноцветный <br /> Состав:
                        Кожа , текстиль, резина <br /> Страна: Вьетнам
                      </span>
                    </h1>
                  </div>
                  <div className={scss.Cub}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;
