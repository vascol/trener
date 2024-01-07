import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function BasicAccordion({ isEng }) {
  return (
    <div className="accordion">
      <Accordion sx={{ mb: 2, borderRadius: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className="accordion__title">
            {!isEng ? "Результати клієнтів" : "Clients result"}
          </h1>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#1c2025", color: "#fff" }}>
          <div className="foto_wrapper">
            <div className="foto">
              <div>Фото до</div>
              <div>Фото після</div>
            </div>
            <div className="foto">
              <div>Фото до</div>
              <div>Фото після</div>
            </div>
            <div className="foto">
              <div>Фото до</div>
              <div>Фото після</div>
            </div>
            <div className="foto">
              <div>Фото до</div>
              <div>Фото після</div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ borderRadius: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1 className="accordion__title">
            {!isEng ? "Послуги" : "Services"}
          </h1>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#1c2025", color: "#fff" }}>
          <div className="services">
            <h2>{!isEng ? "Онлайн супровід:" : "Online support:"}</h2>
            <ul>
              <li>{!isEng ? "програма тренувань" : "training program"}</li>
              <li>
                {!isEng
                  ? "постійний зв`язок зі мною"
                  : "constant communication with me"}
              </li>
              <li>
                {!isEng ? "план харчування + рецепти" : "meal plan + recipes"}
              </li>
              <li>
                {!isEng
                  ? "відео з правильною технікою виконання вправ"
                  : "video with the correct exercise technique"}
              </li>
              <li>
                {!isEng
                  ? "щотижневий огляд результату: заміри тіла, фото форми, зміни по раціону тренуваннях при потребі"
                  : "weekly review of the result: body measurements, photos of the form, changes in the diet and training if necessary"}
              </li>
            </ul>
            <h2 className="price">
              {!isEng ? "Оплата помісячно - 100$" : "Price - $100/month"}
            </h2>
            <div className="serv_divider"></div>
          </div>
          <div className="services">
            <h2>
              {!isEng
                ? "Індивідуальний план тренувань та раціон харчування:"
                : "Individual training plan and diet:"}
            </h2>
            <ul>
              <li>{!isEng ? "програма тренувань" : "training program"}</li>
              <li>{!isEng ? "план харчування" : "meal plan"}</li>
              <li>
                {!isEng
                  ? "відео з правильною технікою виконання вправ"
                  : "video with the correct exercise technique"}
              </li>
              <li>
                {!isEng
                  ? "план на 2 місяці (8тижнів)"
                  : "plan for 2 months (8 weeks)"}
              </li>
              <li>
                {!isEng ? "підтримка протягом 10 днів" : "support for 10 days"}
              </li>
            </ul>
            <h2 className="price">{!isEng ? "1400грн" : "UAH 1400"}</h2>
            <div className="serv_divider"></div>
          </div>
          <div className="services">
            <h2>
              {!isEng
                ? " Персональні тренування (в залі) та онлайн тренування (відео з`язок FaceTime/Telegram/Skype):"
                : "Personal training (in the hall) and online training (FaceTime/Telegram/Skype video connection):"}
            </h2>
            <ul>
              <li>
                {!isEng
                  ? "повний супровід від мене: програма тренувань, раціон харчування"
                  : "full support from me: training program, diet"}
              </li>
            </ul>
            <h2 className="price">
              {!isEng
                ? "400грн/разове тренування"
                : "UAH 400/one time training"}
              <br />
              {!isEng
                ? "3900грн/10 тренувань"
                : "UAH 3900/10 training sessions"}
            </h2>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="serv_divider"></div>
    </div>
  )
}
