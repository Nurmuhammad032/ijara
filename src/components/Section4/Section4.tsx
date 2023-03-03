import "./Section4.scss";

const Section4 = () => {
  return (
    <section className="app-section4">
      <div className="container">
        <div className="app-section4__header-wrapper">
          <div className="app-section4__left">
            <h1>Поможем вам с выбором</h1>
            <div></div>
            <p>
              Оставьте заявку, и мы поможем. За 2-3 минуты дадим консультацию о
              лизинге и подберем подходящий товар.
            </p>
            <button>Подобрать товар</button>
          </div>
          <div className="app-section4__right">
            <div>
              <img src="/images/general-back.png" alt="" />
              <img src="/images/section-4.png" alt="" />
            </div>
          </div>
        </div>

        <div className="app-section4__middle-wrapper">
          <h1>Услуги «Ijara Leasing»</h1>
          <p>Выберите предложение для вашего бизнеса</p>
        </div>
      </div>
      <div className="app-section4__footer-wrapper">
        <div>
          <img src="/images/section-4-footer.png" alt="" />
          <button>Экспресс лизинг</button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
