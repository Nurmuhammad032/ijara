import "./Landing.scss";
import { BsCheckCircle } from "react-icons/bs";

const Landing = () => {
  return (
    <section
      className="app__landing-container container"
      style={{
        background:
          "linear-gradient(90deg,rgba(50, 53, 120, 0.9) 0%, rgba(67, 70, 162, 0.9) 50%,rgba(47, 49, 111, 0.9) 100%), url('/images/landing-back.png')",
      }}
    >
      <div className="app__landing-wrapper">
        <div>
          <h1 className="app__landing-title">
            Выгодный лизинг легковых автомобилей
          </h1>
          <span className="app__landing-desc">
            От надежной национальной компании, без лишних документов и
            дополнительных улсуг
          </span>
          <div className="app__landing-btnWrapper">
            <button className="app__landing-btn">Посмотреть предложения</button>
            <button className="app__landing-btn">Оставить заявку</button>
          </div>
        </div>
        <div className="app__landing-imgWrapper">
          <img
            src="/images/landing-img.png"
            alt=""
            className="app__landing-img"
          />
        </div>
      </div>

      <div
        className="app__landing-footer"
        style={{
          background:
            "linear-gradient(90deg,rgba(38, 39, 69, 0.9) 0%, rgba(38, 39, 69, 0.9) 50%,rgba(38, 39, 69, 0.9) 100%), url('/images/landing-footer.png')",
        }}
      >
        {[
          "Быстрое оформление документов",
          "Выгодные условия",
          "Скидки от производителей",
        ].map((el, i) => (
          <div key={i} className="app__landingFooter-items">
            <span>{<BsCheckCircle />}</span>
            <p>{el}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Landing;
