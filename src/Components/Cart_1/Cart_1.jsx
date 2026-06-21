import scss from "./Cart_1.module.scss";
import Mask from "../../assets/Mask Group.svg";
import Group from "../../assets/Group 72.svg";

function Cart_1() {
  const bloc = [
    {
      img: Mask,
      h1: "Максим Золотарев",
      span: "Администратор",
    },
    {
      img: Mask,
      h1: "Максим Золотарев",
      span: "Администратор",
    },
    {
      img: Mask,
      h1: "Максим Золотарев",
      span: "Администратор",
    },
    {
      img: Mask,
      h1: "Максим Золотарев",
      span: "Администратор",
    },
    {
      img: Mask,
      h1: "Максим Золотарев",
      span: "Администратор",
    },
    {
      img: Mask,
      h1: "Максим Золотарев",
      span: "Администратор",
    },
  ];
  return (
    <section className={scss.Cart_1}>
      <h1>Наша команда</h1>
      <img className={scss.fon} src={Group} alt="" />
      <div className={scss.container}>
        {bloc.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <img src={item.img} alt="" />
            <h2>{item.h1}</h2>
            <span>{item.span}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_1;
