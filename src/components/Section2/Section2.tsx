import "./Section2.scss";

const Section2 = () => {
  return (
    <section className="app-section2">
      <div className="app-section2__img">
        <img src="/images/section-2.png" alt="" />
      </div>
      <div className="app-section2__info">
        <h1>Рассчитайте стоимость лизинга</h1>
        <div className="app-section2__figure">
          <div></div>
          <div></div>
        </div>
        <p>
          Укажите стоимость выбранного автомобиля, желаемый первоначальный взнос
          и срок лизинга. Свяжитесь с нами после предварительного расчета, чтобы
          рассказать о выбранном автомобиле и начать оформление сделки.
        </p>
      </div>
    </section>
  );
};

export default Section2;
