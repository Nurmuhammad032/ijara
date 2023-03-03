import "./Section5.scss";

const Section5 = () => {
  return (
    <section className="app-section5 ">
      <div className="container">
        <div className="app-section5__header-wrapper">
          <div className="app-section5__left">
            <h1>О «Ijara Leasing»</h1>
            <div></div>
            <p>
              «Ijara Leasing» - независимая универсальная компания. Мы
              предоставляем все виды лизинговых услуг, исходя из индивидуальных
              особенностей каждого клиента. <br /> <br />
              «Ijara Leasing» 1 год успешно работает на рынке лизинга и активно
              развивается. Головной офис компании находится в Ташкенте. «Ijara
              Leasing» помогает своим клиентам и партнерам в сегментах микро- и
              малого бизнеса быстро и успешно развиваться. Также компания
              помогает бизнесу среднего, крупного и корпоративного уровня.
              <br /> <br />
              «Ijara Leasing» заинтересовано в построении долгосрочных,
              взаимовыгодных отношений со своими клиентами, обеспечивая
              индивидуальный подход и высокий уровень обслуживания.
              <br /> <br />
            </p>
            <button>Подобрать товар</button>
          </div>
          <div className="app-section5__right">
            <div>
              {/* <img src="/images/general-back.png" alt="" /> */}
              <img src="/images/section-5.png" alt="" />
            </div>
          </div>
        </div>

        <div className="app-section5__middle-wrapper">
          <h1>Оставьте заявку на лизинг</h1>
          <p>Заполните форму, и мы перезвоним вам в ближайшее время</p>
        </div>
      </div>
      <div
        className="app-section5__footer-wrapper"
        style={{
          background:
            "linear-gradient(90deg,rgba(50, 53, 120, 0.9) 0%, rgba(67, 70, 162, 0.9) 50%,rgba(47, 49, 111, 0.9) 100%), url('/images/back.png')",
        }}
      >
        <div className="app-section5__inputs-wrapper">
          <div className="container">
            <h1>Заполните общую информацию</h1>
          </div>
          <div className="app-section5__footer-inputs">
            <div>
              <input type="text" placeholder="Ф.И.O" />
              <input type="text" placeholder="ИНН юридического лица" />
            </div>
            <div>
              <input type="text" placeholder="Мобильный телефон" />
              <input type="text" placeholder="Электронная почта" />
            </div>
            <div className="app-section5__footer-checked">
              <div className="checkbox-wrapper">
                {/* <div> */}
                <input type="checkbox" className="check" />
                {/* </div> */}
                <p>
                  Я соглашаюсь с{" "}
                  <a href="">условиями обработки персональных данных</a>
                </p>
              </div>
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
