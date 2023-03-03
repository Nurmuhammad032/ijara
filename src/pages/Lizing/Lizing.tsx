import "./Lizing.scss";

const Lizing = () => {
  return (
    <section className="app__lizing-container">
      {" "}
      <div className="container custom-container-lizing">
        <div className="app__lizing-wrapper">
          <div>
            <h1 className="app__lizing-title">Экспресс лизинг</h1>
            <span className="app__lizing-desc">
              С целью сделать продукты лизинга доступным широкому кругу
              предпринимателей ООО «Ijara Leasing», ВПЕРВЫЕ в Узбекистане,
              запустила новый продукт – Экспресс лизинг строительной
              специализированной техники.
            </span>
            <div className="app__lizing-btnWrapper">
              <button className="app__lizing-btn">Лизинговые программы</button>
              <button className="app__lizing-btn">Экспресс лизинг</button>
            </div>
          </div>
          <div className="app__lizing-imgWrapper">
            <img
              src="/images/lizing-landing.png"
              alt=""
              className="app__lizing-img"
            />
            <img src="/images/general-back.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lizing;
