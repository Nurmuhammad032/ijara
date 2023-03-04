import { Card } from "../../components";
import "./Lizing.scss";

const cardItems = [
  {
    title: "18-48",
    desc: "месяцев срок лизинга",
  },
  {
    title: "36%",
    desc: "минимальный авансовый платеж",
  },
  {
    title: "20%",
    desc: "ставка удорожания",
  },
  {
    title: "2%",
    desc: "комиссия за рассмотрение",
  },
];

const about = [
  {
    imgIcon: "/images/icon-search.png",
    desc: "Вы выбираете оборудование",
  },
  {
    imgIcon: "/images/icon-document.png",
    desc: "Заполняете заявку на лизинговое финансирование и передаете ее на рассмотрение",
  },
  {
    imgIcon: "/images/icon-edit.png",
    desc: "Вы подписываете комплект документов по сделке, оформляете залог и оплачиваете авансовый платеж",
  },
  {
    imgIcon: "/images/icon-contract.png",
    desc: "С этого момента договор лизинга и договор купли-продажи считается вступившими в силу!",
  },
];

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
      <div className="app__lizing-card-container">
        <div className="app__lizing-card-wrapper">
          {cardItems.map((card, i) => (
            <Card key={i} title={card.title} desc={card.desc} isIcon={false} />
          ))}
        </div>
      </div>
      <div className="app__lizing-about">
        {about.map(({ imgIcon, desc }, i) => (
          <div key={i}>
            <img src={imgIcon} alt="" />
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lizing;
