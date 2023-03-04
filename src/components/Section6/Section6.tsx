import "./Section6.scss";
import { Accordion } from "@mui/material";
import { RxChevronDown } from "react-icons/rx";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import { accordionStyles, accordionSummeryStyles } from "../accordionStyles";

const faq = [
  {
    title: "Чем лизинг отличается от кредита?",
    desc: "При кредите банк передает заемщику денежные средства, а при лизинге — имущество. Покупая автомобиль за наличные или в кредит, вы становитесь его полноправным владельцем: машину можно продать, подарить. А при лизинге собственником остается лизинговая компания.Из-за того что при лизинге банк остается собственником, получить имущество в лизинг — проще и быстрее. Для лизинга как не требуется вносить значительный аванс, заявка рассматривается быстрее.",
  },
  {
    title: "Какие преимущества есть у лизинга?",
    desc: "При кредите банк передает заемщику денежные средства, а при лизинге — имущество. Покупая автомобиль за наличные или в кредит, вы становитесь его полноправным владельцем: машину можно продать, подарить. А при лизинге собственником остается лизинговая компания. Из-за того что при лизинге банк остается собственником, получить имущество в лизинг — проще и быстрее. Для лизинга как не требуется вносить значительный аванс, заявка рассматривается быстрее.",
  },
];

const Section6 = () => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded ? [...expanded, panel] : expanded.filter((p) => p !== panel)
      );
    };

  return (
    <section className="app-section6">
      <div className="container">
        <div className="app-section6__header-wrapper">
          <div className="app-section6__left">
            <div className="app-section6__header-title">
              <div></div>
              <h1>О лизинге</h1>
            </div>
            <p>
              <span>Лизинг</span> - это самый выгодный способ приобрести личный
              автомобиль для юридических лиц. <br /> <br />
              <span>Небольшой залог.</span> Машину в лизинг можно приобрести без
              залога или с минимальным залогом. Это удобно, если ваша компания
              не готова вкладывать значительные средства в первоначальный взнос
              при кредите.
              <br /> <br />
              <span>Налог.</span> Лизинг позволяет значительно экономить на
              налоге на прибыль. Ежемесячные платежи (включая налог на имущество
              и транспорт, страховку, аванс) включаются в себестоимость.
              <br /> <br />
              <span>Специальные предложения.</span> «Ijara Leasing» сотрудничает
              напрямую с производителями и предлагает автомобили с ценами,
              которые часто недоступны другим компаниям и автосалонам.
              <br /> <br />
              <span>Быстрое оформление.</span> Для оформления машины в лизинг
              вам не придется собирать большой пакет документов, автомобиль
              сможет работать и приносить прибыль уже через пару дней после того
              как вы оставите заявку. При этом машина поступит на баланс
              лизингодателя.
              <br /> <br />
              <span>Комплексное обслуживание.</span> «Ijara Leasing» не только
              предложит выгодные условия приобретения автомобиля, но и
              обеспечивает льготные условия его страхования.
              <br /> <br />
            </p>
          </div>
          <div className="app-section6__right">
            <div>
              {/* <img src="/images/general-back.png" alt="" /> */}
              <img src="/images/general-back.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="app-section6__footer-wrapper"
        style={{
          background:
            "linear-gradient(90deg,rgba(50, 53, 120, 0.9) 0%, rgba(67, 70, 162, 0.9) 50%,rgba(47, 49, 111, 0.9) 100%), url('/images/back.png')",
        }}
      >
        <div className="app-section6__inputs-wrapper">
          <div className="">
            <h1>Вопросы и ответы</h1>
          </div>
          <div className="app-section6__footer-inputs">
            {faq.map((el, i) => (
              <Accordion
                expanded={expanded.includes(`panel${i}`)}
                onChange={handleChange(`panel${i}`)}
                sx={{
                  ...accordionStyles,
                  mb: "3rem",
                  px: "1rem",
                  border: "2px solid #319ba1",
                }}
                key={i}
              >
                <AccordionSummary
                  expandIcon={
                    <RxChevronDown className="app-section6__expandIcon" />
                  }
                  aria-controls={`panel${i + 1}bh-content`}
                  id={`panel${i + 1}bh-header`}
                  sx={{ ...accordionSummeryStyles, p: "0" }}
                >
                  <p className="app-section6__accordion-summary">{el.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="app-section6__accordion-details">{el.desc}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
