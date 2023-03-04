import "./Contact.scss";
import { Card } from "../../components";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const cardItems = [
  {
    label: "Адрес",
    title: "Топ-20",
    icon: <HiOutlineLocationMarker />,
    desc: "г. Ташкент, Юнусабадский район, Ц-4, массив Кашгар, 26 дом, 38 кв.",
  },
  {
    label: "Телефон",
    title: "5 млн",
    icon: <BsTelephone />,
    desc: "Тел.: +998 (99) 160-90-00, +998 (99) 161-90-00",
  },
];

const Contact = () => {
  return (
    <section className="app__contact-container">
      {" "}
      <div className="container custom-container-contact">
        <div className="app__contact-wrapper">
          <div>
            <h1 className="app__contact-title">Контакты</h1>
            <div className="app__contact-card-container">
              <div className="app__contact-card-wrapper">
                {cardItems.map((card, i) => (
                  <div className="card-contact-wrap" key={i}>
                    <h1 className="card-label-contact">{card.label}</h1>
                    <Card
                      title={card.title}
                      desc={card.desc}
                      isIcon
                      icon={card.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="app__contact-imgWrapper">
            <img src="/images/logo.png" alt="" className="app__contact-img" />
            <img src="/images/general-back.png" alt="" />
          </div>
        </div>
        <div className="app__contact-placeWrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4963372378156!2d69.26791033131563!3d41.29806491297532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8adb06a1be67%3A0xe50fe74492c34993!2sOybek%20Station!5e0!3m2!1sen!2s!4v1677910823047!5m2!1sen!2s"
            width={"100%"}
            height={600}
            style={{
              border: 0,
            }}
            // allowfullscreen
            // loading={"lazy"}
            title="myFrame"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
