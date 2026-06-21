import scss from "./Title.module.scss";
import figure from "../../assets/figure.svg";
import pexels from "../../assets/pexels.svg";

function Title() {
  return (
    <section className={scss.Title}>
      <img className={scss.fon} src={figure} alt="" />
      <div className={scss.contai_title}>
        <h1>Пара слов о нас</h1>
        <span>
          Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт
          мы можем менять жизни. В том числе с помощью воодушевляющих историй
          спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
        </span>
        <h2>
          <hr />
          SneakMax
        </h2>
      </div>
      <div className={scss.contai_img}>
        <img src={pexels} alt="" />
      </div>
    </section>
  );
}

export default Title;
