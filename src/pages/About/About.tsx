import { Card } from "../../components";
import "./About.scss";

const cardItems = [
  {
    title: "Топ-20",
    desc: "В числе лизинговых компаний Узбекистана",
  },
  {
    title: "5 млн",
    desc: "долларов США Капитал",
  },
  {
    title: "21 млн",
    desc: "долларов США Стоимость проектов",
  },
];

const About = () => {
  return (
    <section className="app__about-container">
      {" "}
      <div className="container custom-container-about">
        <div className="app__about-wrapper">
          <div>
            <h1 className="app__about-title">О компании</h1>
            <p className="app__about-desc">
              <span>«Ijara Leasing»</span> - независимая универсальная компания.
              Мы предоставляем все виды лизинговых услуг, исходя из
              индивидуальных особенностей каждого клиента. <br /> <br />
              <span>«Ijara Leasing» </span> 1 год успешно работает на рынке
              лизинга и активно развивается. Головной офис компании находится в
              Ташкенте. «Ijara Leasing» помогает своим клиентам и партнерам в
              сегментах микро- и малого бизнеса быстро и успешно развиваться.
              Также компания помогает бизнесу среднего, крупного и
              корпоративного уровня.
              <br /> <br />
              <span>«Ijara Leasing» </span> заинтересовано в построении
              долгосрочных, взаимовыгодных отношений со своими клиентами,
              обеспечивая индивидуальный подход и высокий уровень обслуживания.
              <br /> <br />
              <span>Наша миссия</span>
              <br /> <br />
              <span>«Ijara Leasing» </span> - одна из первых и крупных
              иностранных лизинговых компаний в Узбекистане. Мы активно
              финансируем компании во всех ключевых секторах экономики страны от
              животноводческого сектора и добывающей промышленности до
              высокотехнологичных областей, таких как фармацевтика или ИТ.
              Приоритетными направлениями нашей деятельности являются лизинг
              различных видов коммерческих транспортных средств, аграрной и
              специальной строительной техники, а также различного
              производственного и другого оборудования.
            </p>
          </div>
          <div className="app__about-imgWrapper">
            <img src="/images/logo.png" alt="" className="app__about-img" />
            <img src="/images/general-back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="app__about-card-container">
        <div className="app__about-card-wrapper">
          {cardItems.map((card, i) => (
            <Card key={i} title={card.title} desc={card.desc} isIcon={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
