import scss from "./Slider.module.scss";
import check from "../../assets/check.svg";
import checkbox_only from "../../assets/checkbox_only.svg";
import image from "../../assets/фото кроссовка.svg";
import { useState } from "react";
import Rectangle from "../../assets/Rectangle 45.svg";
import iPhone from "../../assets/iPhone 11 Pro.svg";

function Slider() {
  const [active, setActive] = useState(null);
  const [step, setStep] = useState(1);

  const bloc = [
    {
      image: image,
      p: "кеды",
    },
    {
      image: image,
      p: "кеды",
    },
    {
      image: image,
      p: "кеды",
    },
    {
      image: image,
      p: "кеды",
    },
    {
      image: image,
      p: "кеды",
    },
    {
      image: image,
      p: "кеды",
    },
  ];

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      setActive(null);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setActive(null);
    }
  };

  return (
    <section className={scss.Slider}>
      <div className={scss.container}>
        {step === 1 && (
          <>
            <h1>Мы подберем идеальную пару для вас</h1>

            <span>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </span>
            <h3>Какой тип кроссовок рассматриваете?</h3>

            <div className={scss.contai_cart}>
              {bloc.map((item, index) => (
                <div
                  onClick={() => setActive(index)}
                  className={scss.bloc}
                  key={index}
                >
                  <img src={item.image} alt="" />

                  <p>
                    <img
                      src={active === index ? checkbox_only : check}
                      alt=""
                    />
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1>Мы подберем идеальную пару для вас</h1>

            <span>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </span>
            <h3>Какой размер вам подойдет?</h3>

            <div className={scss.contai_size}>
              <div className={scss.contai_p_size}>
                {["менее 36", "36-38", "39-41", "42-44", "45 и больше"].map(
                  (item, index) => (
                    <div
                      key={index}
                      onClick={() => setActive(index)}
                      className={scss.bloc}
                    >
                      <p>
                        <img
                          src={active === index ? checkbox_only : check}
                          alt=""
                        />
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
              <img src={Rectangle} alt="" />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1>Мы подберем идеальную пару для вас</h1>

            <span>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </span>
            <h3>Уточните какие-либо моменты</h3>

            <div className={scss.contai_cart}>
              <input type="text" placeholder="Введите сообщение" />
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className={scss.contai_foter}>
              <h1>Ваша подборка готова!</h1>
              <span>
                Оставьте свои контактные данные, чтобы бы мы могли отправить
                подготовленный для вас каталог
              </span>
              <div className={scss.contai_input}>
                <div className={scss.title}>
                  <h1>Получить предложение</h1>
                  <span>
                    Получите подборку подходящих для вас моделей на почту
                  </span>
                  <div className={scss.input}>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="Email" placeholder="E-mail" />
                  </div>
                  <button>Получить</button>
                </div>
                <img className={scss.iPhone} src={iPhone} alt="" />
              </div>
            </div>
          </>
        )}

        <div className={scss.foter}>
          <p>{step} из 4</p>

          <div>
            {step > 1 && <button onClick={prevStep}>Назад</button>}

            {step < 4 && <button onClick={nextStep}>Следующий шаг</button>}

            {step === 4 && <button>Отправить</button>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
