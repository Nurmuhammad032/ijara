import "./Section3.scss";
import { Box, Slider } from "@mui/material";
import { useState } from "react";

const sliderConfigs = [
  {
    title: "Стоимость покупки",
    min: 2000000,
    max: 100000000,
    label: "сум",
  },
  {
    title: "Первоначальный взнос",
    min: 1000000,
    max: 50000000,
    label: "сум",
  },
  {
    title: "Срок лизинга",
    min: 13,
    max: 60,
    label: "мес",
  },
];

const [config1, config2, config3] = sliderConfigs;

const { min: minValue1 } = config1;
const { min: minValue2 } = config2;
const { min: minValue3 } = config3;

const Section3 = () => {
  const [sliderValues, setSliderValues] = useState<number[]>([
    minValue1,
    minValue2,
    minValue3,
  ]);

  function formatNumber(number: number) {
    const str = String(number).replace(/\s/g, "");
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    return str.replace(regex, "$1 ");
  }

  function handleSliderChange(index: number, newValue: number | number[]) {
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = newValue as number;
    setSliderValues(newSliderValues);
  }

  const [current, initialFee, amount] = sliderValues;
  let resultOfCalculation = (current - initialFee) / amount;
  console.log(Number(formatNumber(resultOfCalculation)));

  return (
    <section
      className="app-section3"
      style={{
        background:
          "linear-gradient(90deg,rgba(50, 53, 120, 0.9) 0%, rgba(67, 70, 162, 0.9) 50%,rgba(47, 49, 111, 0.9) 100%), url('/images/section-3.png') no-repeat scroll center",
      }}
    >
      <div className="app-section3__wrapper">
        <div className="app-section3__left">
          <div className="app-section3__title">
            <h1>КАЛЬКУЛЯТОР ЛИЗИНГА</h1>
            <div></div>
          </div>
          {sliderValues.map((value, index) => (
            <div
              key={index}
              style={{
                marginBottom: "2rem",
              }}
            >
              <div className="app-section3__price-title">
                <p>{sliderConfigs[index].title}</p>
                <p>
                  {formatNumber(value)} {sliderConfigs[index].label}
                </p>
              </div>
              <Box sx={{ width: "100%" }}>
                <Slider
                  onChange={(_, newValue) =>
                    handleSliderChange(index, newValue)
                  }
                  aria-label="Temperature"
                  value={value}
                  sx={{
                    color: "white",
                    "& .MuiSlider-track": {
                      border: "none",
                      color: "#319ba1",
                    },
                    "& .MuiSlider-valueLabel": {
                      display: "none",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "white",
                      opacity: "0.8",
                    },
                  }}
                  valueLabelDisplay="auto"
                  min={sliderConfigs[index].min}
                  max={sliderConfigs[index].max}
                  disabled={current < initialFee && index === 1}
                />
              </Box>
              <div className="app-section3__price-footer">
                <p className="">
                  {formatNumber(sliderConfigs[index].min)}{" "}
                  {sliderConfigs[index].label}
                </p>
                <p>
                  {formatNumber(sliderConfigs[index].max)}{" "}
                  {sliderConfigs[index].label}
                </p>
              </div>
            </div>
          ))}
          <p className="app-section3__footer">
            Приведенные расчеты через калькулятор являются предварительными и не
            является офертой.
          </p>
        </div>
        <div className="app-section3__right">
          <div>
            <h1>
              {formatNumber(current)} сум <br />
              Сумма лизинга
            </h1>
            <h1>
              {amount <= 0
                ? 0
                : formatNumber(
                    Math.floor((current - initialFee) / amount)
                  )}{" "}
              сум <br />
              Ежемесячный платеж
            </h1>
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
