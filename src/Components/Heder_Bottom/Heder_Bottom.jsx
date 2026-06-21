import scss from "./Heder_Bottom.module.scss";

function Heder_Bottom() {
  return (
    <section className={scss.Heder_Bottom}>
      <h1>SneakMax</h1>
      <div className={scss.contai_a}>
        <a href="">Каталог</a>
        <a href="">О нас</a>
        <a href="">Подбор товара</a>
        <a href="">Наша команда</a>
        <a href="">Доставка и оплата</a>
        <a href="">Контакты</a>
      </div>
    </section>
  );
}

export default Heder_Bottom;
