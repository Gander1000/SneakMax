import scss from "./Question.module.scss";
import Vector from "../../assets/Vector (1).svg";
import p from "../../assets/+.svg";
import { useState } from "react";

function Question() {
  const [ac, setAc] = useState(false);
  const [oc, setOc] = useState(false);
  return (
    <section className={scss.Question}>
      <h1>Часто задаваемые вопросы</h1>
      <div className={scss.container}>
        <div className={scss.menu}>
            <hr />
          <div className={scss.top}>
            <h2>Вопрос 1</h2>
            <img onClick={() => setAc(!ac)} src={ac ? Vector : p} alt="" />
          </div>
          {ac && (
            <div className={scss.bottom_menu}>
              <span>
                А это ответ 1: в комплексе функционируют 6 детских садов с
                площадками, воспитателями и всякими другими людьми
              </span>
            </div>
          )}
        </div>
        <div className={scss.menu}>
          <div className={scss.top}>
            <h2>Вопрос 2</h2>
            <img onClick={() => setOc(!oc)} src={oc ? Vector : p} alt="" />
          </div>
          {oc && (
            <div className={scss.bottom_menu}>
              <span>
                А это ответ 1: в комплексе функционируют 6 детских садов с
                площадками, воспитателями и всякими другими людьми
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Question;
