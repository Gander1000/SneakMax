import scss from "./Foter.module.scss";
import Instagram from "../../assets/Instagram.svg";
import Rectangle from "../../assets/Rectangle 37.svg";
import Rectangle_big from "../../assets/Rectangle 38.svg";

function Foter() {
  return (
    <section className={scss.Foter}>
      <div className={scss.contai_title}>
        <h1>Есть вопросы?</h1>
        <span>Заполните форму и наш <br /> менеджер свяжется с вами</span>
        <div className={scss.contai_button}>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <button>Отправить</button>
        </div>
      </div>
      <div className={scss.contai_img}>
        <img className={scss.Instagram} src={Instagram} alt="" />
        <div className={scss.cart_img}>
          <div className={scss.contai}>
            <img src={Rectangle} alt="" />
            <img src={Rectangle} alt="" />
          </div>
          <img className={scss.volf} src={Rectangle_big} alt="" />
          <div className={scss.contai}>
            <img src={Rectangle} alt="" />
            <img src={Rectangle} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Foter;
