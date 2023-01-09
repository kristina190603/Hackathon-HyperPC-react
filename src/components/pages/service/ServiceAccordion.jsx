import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordion_style = {
  bgcolor: "#444",
  width: "60%",
};

export default function ServiceAccordion() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ margin: "0 auto" }}>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Я не нашёл свою проблему в списке, что делать?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
