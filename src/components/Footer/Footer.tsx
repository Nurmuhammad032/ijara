import "./Footer.scss";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="app-footer__wrapper">
          <div className="app-footer__column">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{
                width: "12.9rem",
              }}
            />
            <h1 className="app-footer__logo-text">IJARA LEASING</h1>
          </div>
          <div className="app-footer__contact-wrapper">
            <h4>Контакты</h4>
            <div className="app-footer__column">
              <BsTelephone className="app-footer__info-icon" />
              <div>
                <p>+998 (99) 160-90-00</p>
                <p>+998 (99) 161-90-00</p>
              </div>
            </div>
            <div className="app-footer__column">
              <MdOutlineEmail className="app-footer__info-icon" />
              <p>info@ijara-leasing.uz</p>
            </div>
            <div className="app-footer__column">
              <HiOutlineLocationMarker className="app-footer__info-icon" />
              <p>г. Ташкент, Ц-4, массив Кашгар, 26 дом, 38 кв.</p>
            </div>
            <div className="app-footer__social-wrap">
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
              <div>OOO “IJARA LEASING” 2021-2021</div>
            </div>
          </div>
          <div className="app-footer__last-column">
            <h4>Реквизиты</h4>
            <p className="app-footer__banner">
              Расчетный счет сум 20208000805354860001 в АИКБ «Ипак Йули», г.
              Ташкент Код банка: 00444 ИНН: 308234550
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
