import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function BasicAccordion() {
  return (
    <div className="accordion">
      <Accordion sx={{ mb: 2, borderRadius: 3 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className="accordion__title">Результати клієнтів</h1>
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
          <h1 className="accordion__title">Послуги</h1>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#1c2025", color: "#fff" }}>
          <div className="services">
            <h2>Онлайн супровід:</h2>
            <ul>
              <li>програма тренувань</li>
              <li>постійний зв'язок зі мною</li>
              <li>план харчування + рецепти</li>
              <li>відео з правильною технікою виконання вправ</li>
              <li>
                щотижневий огляд результату (заміри тіла, фото форми, зміни по
                раціону тренуваннях при потребі)
              </li>
            </ul>
            <h2 className="price">Оплата помісячно - 100$</h2>
            <div className="serv_divider"></div>
          </div>
          <div className="services">
            <h2>Індивідуальний план тренувань та раціон харчування:</h2>
            <ul>
              <li>програма тренувань</li>
              <li>план харчування</li>
              <li>відео з правильною технікою виконання вправ</li>
              <li>план на 2 місяці (8тижнів)</li>
              <li>підтримка протягом 10 днів</li>
            </ul>
            <h2 className="price">1400грн</h2>
            <div className="serv_divider"></div>
          </div>
          <div className="services">
            <h2>
              Персональні тренування (в залі) та онлайн тренування (відео з'язок
              FaceTime/Telegram/Skype):
            </h2>
            <ul>
              <li>
                повний супровід від мене: програма тренувань, раціон харчування
              </li>
            </ul>
            <h2 className="price">
              400грн/разове тренування
              <br />
              3900грн/10 тренувань
            </h2>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="serv_divider"></div>
    </div>
  )
}
