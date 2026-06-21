import scss from "./Contact_us.module.scss";
import Rectangle from "../../assets/Rectangle 32.svg";
import VK from "../../assets/VK.svg";

function Contact_us() {
  return (
    <section className={scss.Contact_us}>
      <div className={scss.contai_title}>
        <h2>Контакты</h2>
        <div className={scss.top}>
          <h3>Главный офис</h3>
          <p>?</p>
        </div>
        <h1>+7 800 789 89 89</h1>
        <span>г. Санкт-Петербург, Комсомольская, 43 к1</span>
        <h3>отдел продаж</h3>
        <h1>+7 800 789 89 89</h1>
        <span>г. Санкт-Петербург, Комсомольская, 43 к1</span>
        <div className={scss.bottom}>
          <img src={VK} alt="" />
          <img src={VK} alt="" />
        </div>
      </div>
      <div className={scss.contai_img}>
        <img src={Rectangle} alt="" />
      </div>
    </section>
  );
}

export default Contact_us;
